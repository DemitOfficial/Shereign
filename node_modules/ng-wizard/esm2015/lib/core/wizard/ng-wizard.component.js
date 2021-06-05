import { __decorate, __metadata } from "tslib";
import { Component, Input, EventEmitter, Output, ContentChildren, QueryList } from '@angular/core';
import { isObservable, of } from 'rxjs';
import { NgWizardDataService } from '../ng-wizard-data.service';
import { NgWizardStep } from '../../utils/interfaces';
import { TOOLBAR_POSITION, STEP_STATE, STEP_STATUS, STEP_DIRECTIN, STEP_POSITION } from '../../utils/enums';
import { merge } from '../../utils/functions';
let NgWizardComponent = class NgWizardComponent {
    constructor(ngWizardDataService) {
        this.ngWizardDataService = ngWizardDataService;
        this.stepChanged = new EventEmitter();
        this.themeChanged = new EventEmitter();
        this.reseted = new EventEmitter();
        this.styles = {};
        this.showToolbarTop = false;
        this.showPreviousButton = false;
        this.showNextButton = false;
        this.showToolbarBottom = false;
        this.showExtraButtons = false;
        this.currentStepIndex = null; // Active step index
    }
    get pConfig() {
        return this._pConfig || {};
    }
    set pConfig(config) {
        this._pConfig = config;
    }
    ngAfterContentInit() {
        this._backupStepStates();
        this._init();
        // Set toolbar
        this._setToolbar();
        // Assign plugin events
        this._setEvents();
        this.resetWizardWatcher = this.ngWizardDataService.resetWizard$.subscribe(() => this._reset());
        this.showNextStepWatcher = this.ngWizardDataService.showNextStep$.subscribe(() => this._showNextStep());
        this.showPreviousStepWatcher = this.ngWizardDataService.showPreviousStep$.subscribe(() => this._showPreviousStep());
        this.showStepWatcher = this.ngWizardDataService.showStep$.subscribe(index => this._showStep(index));
        this.setThemeWatcher = this.ngWizardDataService.setTheme$.subscribe(theme => this._setTheme(theme));
    }
    _init() {
        // set config
        let defaultConfig = this.ngWizardDataService.getDefaultConfig();
        this.config = merge(defaultConfig, this.pConfig);
        // set step states
        this._initSteps();
        // Set the elements
        this._initStyles();
        // Show the initial step
        this._showStep(this.config.selected);
    }
    _initSteps() {
        this.steps.forEach((step, index) => {
            step.index = index;
            step.status = step.status || STEP_STATUS.untouched;
            step.state = step.state || STEP_STATE.normal;
        });
        // Mark previous steps of the active step as done
        if (this.config.selected > 0
            && this.config.anchorSettings.markDoneStep
            && this.config.anchorSettings.markAllPreviousStepsAsDone) {
            this.steps.forEach(step => {
                if (step.state != STEP_STATE.disabled && step.state != STEP_STATE.hidden) {
                    step.status = step.index < this.config.selected ? STEP_STATUS.done : step.status;
                }
            });
        }
    }
    _backupStepStates() {
        this.steps.forEach(step => {
            step.initialStatus = step.status;
            step.initialState = step.state;
        });
    }
    _restoreStepStates() {
        this.steps.forEach(step => {
            step.status = step.initialStatus;
            step.state = step.initialState;
        });
    }
    // PRIVATE FUNCTIONS
    _initStyles() {
        // Set the main element
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
        // Set anchor elements
        this.styles.step = 'nav-item'; // li
        // Make the anchor clickable
        if (this.config.anchorSettings.enableAllAnchors && this.config.anchorSettings.anchorClickable) {
            this.styles.step += ' clickable';
        }
        // Set the toolbar styles
        this.styles.toolbarTop = 'btn-toolbar ng-wizard-toolbar ng-wizard-toolbar-top justify-content-' + this.config.toolbarSettings.toolbarButtonPosition;
        this.styles.toolbarBottom = 'btn-toolbar ng-wizard-toolbar ng-wizard-toolbar-bottom justify-content-' + this.config.toolbarSettings.toolbarButtonPosition;
        // Set previous&next buttons 
        this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev';
        this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next';
    }
    _setToolbar() {
        this.showToolbarTop = this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.top ||
            this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.both;
        this.showToolbarBottom = this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.bottom ||
            this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.both;
        this.showPreviousButton = this.config.toolbarSettings.showPreviousButton;
        this.showNextButton = this.config.toolbarSettings.showNextButton;
        this.showExtraButtons = this.config.toolbarSettings.toolbarExtraButtons && this.config.toolbarSettings.toolbarExtraButtons.length > 0;
    }
    _setEvents() {
        //TODO: keyNavigation
        // Keyboard navigation event
        if (this.config.keyNavigation) {
            // $(document).keyup(function (e) {
            //   mi._keyNav(e);
            // });
        }
    }
    _getStepCssClass(selectedStep) {
        let stepClass = this.styles.step;
        switch (selectedStep.state) {
            case STEP_STATE.disabled:
                stepClass += ' disabled';
                break;
            case STEP_STATE.error:
                stepClass += ' danger';
                break;
            case STEP_STATE.hidden:
                stepClass += ' hidden';
                break;
        }
        switch (selectedStep.status) {
            case STEP_STATUS.done:
                stepClass += ' done';
                break;
            case STEP_STATUS.active:
                stepClass += ' active';
                break;
        }
        return stepClass;
    }
    _showSelectedStep(event, selectedStep) {
        event.preventDefault();
        if (!this.config.anchorSettings.anchorClickable) {
            return;
        }
        if (!this.config.anchorSettings.enableAnchorOnDoneStep && selectedStep.status == STEP_STATUS.done) {
            return true;
        }
        if (selectedStep.index != this.currentStepIndex) {
            if (this.config.anchorSettings.enableAllAnchors && this.config.anchorSettings.anchorClickable) {
                this._showStep(selectedStep.index);
            }
            else {
                if (selectedStep.status == STEP_STATUS.done) {
                    this._showStep(selectedStep.index);
                }
            }
        }
    }
    _showNextStep(event) {
        if (event) {
            event.preventDefault();
        }
        // Find the next not disabled & hidden step
        let filteredSteps = this.steps.filter(step => {
            return step.index > (this.currentStepIndex == null ? -1 : this.currentStepIndex)
                && step.state != STEP_STATE.disabled
                && step.state != STEP_STATE.hidden;
        });
        if (filteredSteps.length == 0) {
            if (!this.config.cycleSteps) {
                return;
            }
            this._showStep(0);
        }
        else {
            this._showStep(filteredSteps.shift().index);
        }
    }
    _showPreviousStep(event) {
        if (event) {
            event.preventDefault();
        }
        // Find the previous not disabled & hidden step
        let filteredSteps = this.steps.filter(step => {
            return step.index < (this.currentStepIndex == null && this.config.cycleSteps ? this.steps.length : this.currentStepIndex)
                && step.state != STEP_STATE.disabled
                && step.state != STEP_STATE.hidden;
        });
        if (filteredSteps.length == 0) {
            if (!this.config.cycleSteps) {
                return;
            }
            this._showStep(this.steps.length - 1);
        }
        else {
            this._showStep(filteredSteps.pop().index);
        }
    }
    _showStep(selectedStepIndex) {
        // If step not found, skip
        if (selectedStepIndex >= this.steps.length || selectedStepIndex < 0) {
            return;
        }
        // If current step is requested again, skip
        if (selectedStepIndex == this.currentStepIndex) {
            return;
        }
        let selectedStep = this.steps.toArray()[selectedStepIndex];
        // If it is a disabled or hidden step, skip
        if (selectedStep.state == STEP_STATE.disabled || selectedStep.state == STEP_STATE.hidden) {
            return;
        }
        this._showLoader();
        return this._isStepChangeValid(selectedStep, this.currentStep && this.currentStep.canExit).toPromise()
            .then(isValid => {
            if (isValid) {
                return this._isStepChangeValid(selectedStep, selectedStep.canEnter).toPromise();
            }
            return of(isValid).toPromise();
        })
            .then(isValid => {
            if (isValid) {
                // Load step content
                this._loadStepContent(selectedStep);
            }
        })
            .finally(() => this._hideLoader());
    }
    _isStepChangeValid(selectedStep, condition) {
        if (typeof condition === typeof true) {
            return of(condition);
        }
        else if (condition instanceof Function) {
            let direction = this._getStepDirection(selectedStep.index);
            let result = condition({ direction: direction, fromStep: this.currentStep, toStep: selectedStep });
            if (isObservable(result)) {
                return result;
            }
            else if (typeof result === typeof true) {
                return of(result);
            }
            else {
                return of(false);
            }
        }
        return of(true);
    }
    _loadStepContent(selectedStep) {
        // Update controls
        this._setAnchor(selectedStep);
        // Set the buttons based on the step
        this._setButtons(selectedStep.index);
        // Trigger "stepChanged" event
        const args = {
            step: selectedStep,
            previousStep: this.currentStep,
            direction: this._getStepDirection(selectedStep.index),
            position: this._getStepPosition(selectedStep.index)
        };
        this.stepChanged.emit(args);
        this.ngWizardDataService.stepChanged(args);
        // Update the current index
        this.currentStepIndex = selectedStep.index;
        this.currentStep = selectedStep;
    }
    _setAnchor(selectedStep) {
        // Current step anchor > Remove other classes and add done class
        if (this.currentStep) {
            this.currentStep.status = STEP_STATUS.untouched;
            if (this.config.anchorSettings.markDoneStep) {
                this.currentStep.status = STEP_STATUS.done;
                if (this.config.anchorSettings.removeDoneStepOnNavigateBack) {
                    this.steps.forEach(step => {
                        if (step.index > selectedStep.index) {
                            step.status = STEP_STATUS.untouched;
                        }
                    });
                }
            }
        }
        // Next step anchor > Remove other classes and add active class
        selectedStep.status = STEP_STATUS.active;
    }
    _setButtons(index) {
        // Previous/Next Button enable/disable based on step
        if (!this.config.cycleSteps) {
            if (0 >= index) {
                this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev disabled';
            }
            else {
                this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev';
            }
            if (this.steps.length - 1 <= index) {
                this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next disabled';
            }
            else {
                this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next';
            }
        }
    }
    _extraButtonClicked(button) {
        if (button.event) {
            button.event();
        }
    }
    // HELPER FUNCTIONS
    _keyNav(event) {
        // Keyboard navigation
        switch (event.which) {
            case 37:
                // left
                this._showPreviousStep(event);
                event.preventDefault();
                break;
            case 39:
                // right
                this._showNextStep(event);
                event.preventDefault();
                break;
            default:
                return; // exit this handler for other keys
        }
    }
    _showLoader() {
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme + ' ng-wizard-loading';
    }
    _hideLoader() {
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
    }
    _getStepDirection(selectedStepIndex) {
        return (this.currentStepIndex != null && this.currentStepIndex != selectedStepIndex) ?
            (this.currentStepIndex < selectedStepIndex ? STEP_DIRECTIN.forward : STEP_DIRECTIN.backward) : null;
    }
    _getStepPosition(selectedStepIndex) {
        return (selectedStepIndex == 0) ? STEP_POSITION.first : (selectedStepIndex == this.steps.length - 1 ? STEP_POSITION.final : STEP_POSITION.middle);
    }
    // PUBLIC FUNCTIONS
    _setTheme(theme) {
        if (this.config.theme == theme) {
            return false;
        }
        this.config.theme = theme;
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
        // Trigger "themeChanged" event
        this.themeChanged.emit(this.config.theme);
    }
    _reset() {
        // Reset all elements and classes
        this.currentStepIndex = null;
        this.currentStep = null;
        this._restoreStepStates();
        this._init();
        // Trigger "reseted" event
        this.reseted.emit();
    }
    ngOnDestroy() {
        if (this.resetWizardWatcher) {
            this.resetWizardWatcher.unsubscribe();
        }
        if (this.showNextStepWatcher) {
            this.showNextStepWatcher.unsubscribe();
        }
        if (this.showPreviousStepWatcher) {
            this.showPreviousStepWatcher.unsubscribe();
        }
        if (this.showStepWatcher) {
            this.showStepWatcher.unsubscribe();
        }
        if (this.setThemeWatcher) {
            this.setThemeWatcher.unsubscribe();
        }
    }
};
NgWizardComponent.ctorParameters = () => [
    { type: NgWizardDataService }
];
__decorate([
    ContentChildren(NgWizardStep),
    __metadata("design:type", QueryList)
], NgWizardComponent.prototype, "steps", void 0);
__decorate([
    Input('config'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgWizardComponent.prototype, "pConfig", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgWizardComponent.prototype, "stepChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgWizardComponent.prototype, "themeChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NgWizardComponent.prototype, "reseted", void 0);
NgWizardComponent = __decorate([
    Component({
        selector: 'ng-wizard',
        template: "<div id=\"ngwizard\" [ngClass]=\"styles.main\">\r\n    <ul class=\"nav nav-tabs step-anchor\">\r\n        <li *ngFor=\"let step of steps; let i = index\" [ngClass]=\"_getStepCssClass(step)\">\r\n            <a href=\"#step-{{ i }}\" (click)=\"_showSelectedStep($event, step)\" *ngIf=\"!step.isHidden\"\r\n                class=\"nav-link\">{{ step.title }}<br /><small>{{ step.description }}</small></a>\r\n        </li>\r\n    </ul>\r\n\r\n    <div *ngIf=\"showToolbarTop\" [ngClass]=\"styles.toolbarTop\">\r\n        <div class=\"btn-group mr-2 ng-wizard-btn-group\" role=\"group\">\r\n            <button *ngIf=\"showPreviousButton\" [ngClass]=\"styles.previousButton\" type=\"button\"\r\n                (click)=\"_showPreviousStep($event)\">{{ config!.lang!.previous }}</button>\r\n            <button *ngIf=\"showNextButton\" [ngClass]=\"styles.nextButton\" type=\"button\"\r\n                (click)=\"_showNextStep($event)\">{{ config!.lang!.next }}</button>\r\n        </div>\r\n\r\n        <div *ngIf=\"showExtraButtons\" class=\"btn-group mr-2 ng-wizard-btn-group-extra\" role=\"group\">\r\n            <button *ngFor=\"let button of config!.toolbarSettings!.toolbarExtraButtons; let j = index\"\r\n                [ngClass]=\"button.class\" type=\"button\" (click)=\"_extraButtonClicked(button)\">{{ button.text }}</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ng-wizard-container tab-content\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n\r\n    <div *ngIf=\"showToolbarBottom\" [ngClass]=\"styles.toolbarBottom\">\r\n        <div class=\"btn-group mr-2 ng-wizard-btn-group\" role=\"group\">\r\n            <button *ngIf=\"showPreviousButton\" [ngClass]=\"styles.previousButton\" type=\"button\"\r\n                (click)=\"_showPreviousStep($event)\">{{ config!.lang!.previous }}</button>\r\n            <button *ngIf=\"showNextButton\" [ngClass]=\"styles.nextButton\" type=\"button\"\r\n                (click)=\"_showNextStep($event)\">{{ config!.lang!.next }}</button>\r\n        </div>\r\n\r\n        <div *ngIf=\"showExtraButtons\" class=\"btn-group mr-2 ng-wizard-btn-group-extra\" role=\"group\">\r\n            <button *ngFor=\"let button of config!.toolbarSettings!.toolbarExtraButtons; let j = index\"\r\n                [ngClass]=\"button.class\" type=\"button\" (click)=\"_extraButtonClicked(button)\">{{ button.text }}</button>\r\n        </div>\r\n    </div>\r\n</div>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [NgWizardDataService])
], NgWizardComponent);
export { NgWizardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3dpemFyZC9uZy13aXphcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixLQUFLLEVBQWEsWUFBWSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxZQUFZLEVBQTBCLEVBQUUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFrQixZQUFZLEVBQXNELE1BQU0sd0JBQXdCLENBQUM7QUFDMUgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQVMsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ILE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU85QyxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQTRDNUIsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUEzQmxELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDbEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBQ3pDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTdDLFdBQU0sR0FPRixFQUFFLENBQUM7UUFFUCxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyx1QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFDcEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxxQkFBZ0IsR0FBVyxJQUFJ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bnRlbnRJbml0LCBJbnB1dCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNPYnNlcnZhYmxlLCBvYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOZ1dpemFyZERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vbmctd2l6YXJkLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IE5nV2l6YXJkQ29uZmlnLCBOZ1dpemFyZFN0ZXAsIFRvb2xiYXJCdXR0b24sIFN0ZXBDaGFuZ2VkQXJncywgU3RlcFZhbGlkYXRpb25BcmdzIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFRPT0xCQVJfUE9TSVRJT04sIFNURVBfU1RBVEUsIFNURVBfU1RBVFVTLCBUSEVNRSwgU1RFUF9ESVJFQ1RJTiwgU1RFUF9QT1NJVElPTiB9IGZyb20gJy4uLy4uL3V0aWxzL2VudW1zJztcclxuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuLi8uLi91dGlscy9mdW5jdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy13aXphcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy13aXphcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25nLXdpemFyZC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1dpemFyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oTmdXaXphcmRTdGVwKVxyXG4gIHB1YmxpYyBzdGVwczogUXVlcnlMaXN0PE5nV2l6YXJkU3RlcD47XHJcblxyXG4gIF9wQ29uZmlnOiBOZ1dpemFyZENvbmZpZztcclxuICBnZXQgcENvbmZpZygpOiBOZ1dpemFyZENvbmZpZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fcENvbmZpZyB8fCB7fTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnY29uZmlnJylcclxuICBzZXQgcENvbmZpZyhjb25maWc6IE5nV2l6YXJkQ29uZmlnKSB7XHJcbiAgICB0aGlzLl9wQ29uZmlnID0gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgY29uZmlnOiBOZ1dpemFyZENvbmZpZztcclxuXHJcbiAgQE91dHB1dCgpIHN0ZXBDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxTdGVwQ2hhbmdlZEFyZ3M+KCk7XHJcbiAgQE91dHB1dCgpIHRoZW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VEhFTUU+KCk7XHJcbiAgQE91dHB1dCgpIHJlc2V0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIHN0eWxlczoge1xyXG4gICAgbWFpbj86IHN0cmluZztcclxuICAgIHN0ZXA/OiBzdHJpbmc7XHJcbiAgICBwcmV2aW91c0J1dHRvbj86IHN0cmluZztcclxuICAgIG5leHRCdXR0b24/OiBzdHJpbmc7XHJcbiAgICB0b29sYmFyVG9wPzogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJvdHRvbT86IHN0cmluZztcclxuICB9ID0ge307XHJcblxyXG4gIHNob3dUb29sYmFyVG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2hvd1ByZXZpb3VzQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2hvd05leHRCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93VG9vbGJhckJvdHRvbTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNob3dFeHRyYUJ1dHRvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjdXJyZW50U3RlcEluZGV4OiBudW1iZXIgPSBudWxsOyAvLyBBY3RpdmUgc3RlcCBpbmRleFxyXG4gIGN1cnJlbnRTdGVwOiBOZ1dpemFyZFN0ZXA7IC8vIEFjdGl2ZSBzdGVwXHJcblxyXG4gIHJlc2V0V2l6YXJkV2F0Y2hlcjogU3Vic2NyaXB0aW9uO1xyXG4gIHNob3dOZXh0U3RlcFdhdGNoZXI6IFN1YnNjcmlwdGlvbjtcclxuICBzaG93UHJldmlvdXNTdGVwV2F0Y2hlcjogU3Vic2NyaXB0aW9uO1xyXG4gIHNob3dTdGVwV2F0Y2hlcjogU3Vic2NyaXB0aW9uO1xyXG4gIHNldFRoZW1lV2F0Y2hlcjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nV2l6YXJkRGF0YVNlcnZpY2U6IE5nV2l6YXJkRGF0YVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX2JhY2t1cFN0ZXBTdGF0ZXMoKTtcclxuXHJcbiAgICB0aGlzLl9pbml0KCk7XHJcblxyXG4gICAgLy8gU2V0IHRvb2xiYXJcclxuICAgIHRoaXMuX3NldFRvb2xiYXIoKTtcclxuXHJcbiAgICAvLyBBc3NpZ24gcGx1Z2luIGV2ZW50c1xyXG4gICAgdGhpcy5fc2V0RXZlbnRzKCk7XHJcblxyXG4gICAgdGhpcy5yZXNldFdpemFyZFdhdGNoZXIgPSB0aGlzLm5nV2l6YXJkRGF0YVNlcnZpY2UucmVzZXRXaXphcmQkLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9yZXNldCgpKTtcclxuICAgIHRoaXMuc2hvd05leHRTdGVwV2F0Y2hlciA9IHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zaG93TmV4dFN0ZXAkLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zaG93TmV4dFN0ZXAoKSk7XHJcbiAgICB0aGlzLnNob3dQcmV2aW91c1N0ZXBXYXRjaGVyID0gdGhpcy5uZ1dpemFyZERhdGFTZXJ2aWNlLnNob3dQcmV2aW91c1N0ZXAkLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zaG93UHJldmlvdXNTdGVwKCkpO1xyXG4gICAgdGhpcy5zaG93U3RlcFdhdGNoZXIgPSB0aGlzLm5nV2l6YXJkRGF0YVNlcnZpY2Uuc2hvd1N0ZXAkLnN1YnNjcmliZShpbmRleCA9PiB0aGlzLl9zaG93U3RlcChpbmRleCkpO1xyXG4gICAgdGhpcy5zZXRUaGVtZVdhdGNoZXIgPSB0aGlzLm5nV2l6YXJkRGF0YVNlcnZpY2Uuc2V0VGhlbWUkLnN1YnNjcmliZSh0aGVtZSA9PiB0aGlzLl9zZXRUaGVtZSh0aGVtZSkpO1xyXG4gIH1cclxuXHJcbiAgX2luaXQoKSB7XHJcbiAgICAvLyBzZXQgY29uZmlnXHJcbiAgICBsZXQgZGVmYXVsdENvbmZpZyA9IHRoaXMubmdXaXphcmREYXRhU2VydmljZS5nZXREZWZhdWx0Q29uZmlnKCk7XHJcbiAgICB0aGlzLmNvbmZpZyA9IG1lcmdlKGRlZmF1bHRDb25maWcsIHRoaXMucENvbmZpZyk7XHJcblxyXG4gICAgLy8gc2V0IHN0ZXAgc3RhdGVzXHJcbiAgICB0aGlzLl9pbml0U3RlcHMoKTtcclxuXHJcbiAgICAvLyBTZXQgdGhlIGVsZW1lbnRzXHJcbiAgICB0aGlzLl9pbml0U3R5bGVzKCk7XHJcblxyXG4gICAgLy8gU2hvdyB0aGUgaW5pdGlhbCBzdGVwXHJcbiAgICB0aGlzLl9zaG93U3RlcCh0aGlzLmNvbmZpZy5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBfaW5pdFN0ZXBzKCkge1xyXG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICBzdGVwLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHN0ZXAuc3RhdHVzID0gc3RlcC5zdGF0dXMgfHwgU1RFUF9TVEFUVVMudW50b3VjaGVkO1xyXG4gICAgICBzdGVwLnN0YXRlID0gc3RlcC5zdGF0ZSB8fCBTVEVQX1NUQVRFLm5vcm1hbDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE1hcmsgcHJldmlvdXMgc3RlcHMgb2YgdGhlIGFjdGl2ZSBzdGVwIGFzIGRvbmVcclxuICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3RlZCA+IDBcclxuICAgICAgJiYgdGhpcy5jb25maWcuYW5jaG9yU2V0dGluZ3MubWFya0RvbmVTdGVwXHJcbiAgICAgICYmIHRoaXMuY29uZmlnLmFuY2hvclNldHRpbmdzLm1hcmtBbGxQcmV2aW91c1N0ZXBzQXNEb25lKSB7XHJcblxyXG4gICAgICB0aGlzLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgaWYgKHN0ZXAuc3RhdGUgIT0gU1RFUF9TVEFURS5kaXNhYmxlZCAmJiBzdGVwLnN0YXRlICE9IFNURVBfU1RBVEUuaGlkZGVuKSB7XHJcbiAgICAgICAgICBzdGVwLnN0YXR1cyA9IHN0ZXAuaW5kZXggPCB0aGlzLmNvbmZpZy5zZWxlY3RlZCA/IFNURVBfU1RBVFVTLmRvbmUgOiBzdGVwLnN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2JhY2t1cFN0ZXBTdGF0ZXMoKSB7XHJcbiAgICB0aGlzLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgIHN0ZXAuaW5pdGlhbFN0YXR1cyA9IHN0ZXAuc3RhdHVzO1xyXG4gICAgICBzdGVwLmluaXRpYWxTdGF0ZSA9IHN0ZXAuc3RhdGU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9yZXN0b3JlU3RlcFN0YXRlcygpIHtcclxuICAgIHRoaXMuc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgc3RlcC5zdGF0dXMgPSBzdGVwLmluaXRpYWxTdGF0dXM7XHJcbiAgICAgIHN0ZXAuc3RhdGUgPSBzdGVwLmluaXRpYWxTdGF0ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gUFJJVkFURSBGVU5DVElPTlNcclxuICBfaW5pdFN0eWxlcygpIHtcclxuICAgIC8vIFNldCB0aGUgbWFpbiBlbGVtZW50XHJcbiAgICB0aGlzLnN0eWxlcy5tYWluID0gJ25nLXdpemFyZC1tYWluIG5nLXdpemFyZC10aGVtZS0nICsgdGhpcy5jb25maWcudGhlbWU7XHJcblxyXG4gICAgLy8gU2V0IGFuY2hvciBlbGVtZW50c1xyXG4gICAgdGhpcy5zdHlsZXMuc3RlcCA9ICduYXYtaXRlbSc7IC8vIGxpXHJcblxyXG4gICAgLy8gTWFrZSB0aGUgYW5jaG9yIGNsaWNrYWJsZVxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmFuY2hvclNldHRpbmdzLmVuYWJsZUFsbEFuY2hvcnMgJiYgdGhpcy5jb25maWcuYW5jaG9yU2V0dGluZ3MuYW5jaG9yQ2xpY2thYmxlKSB7XHJcbiAgICAgIHRoaXMuc3R5bGVzLnN0ZXAgKz0gJyBjbGlja2FibGUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCB0aGUgdG9vbGJhciBzdHlsZXNcclxuICAgIHRoaXMuc3R5bGVzLnRvb2xiYXJUb3AgPSAnYnRuLXRvb2xiYXIgbmctd2l6YXJkLXRvb2xiYXIgbmctd2l6YXJkLXRvb2xiYXItdG9wIGp1c3RpZnktY29udGVudC0nICsgdGhpcy5jb25maWcudG9vbGJhclNldHRpbmdzLnRvb2xiYXJCdXR0b25Qb3NpdGlvbjtcclxuICAgIHRoaXMuc3R5bGVzLnRvb2xiYXJCb3R0b20gPSAnYnRuLXRvb2xiYXIgbmctd2l6YXJkLXRvb2xiYXIgbmctd2l6YXJkLXRvb2xiYXItYm90dG9tIGp1c3RpZnktY29udGVudC0nICsgdGhpcy5jb25maWcudG9vbGJhclNldHRpbmdzLnRvb2xiYXJCdXR0b25Qb3NpdGlvbjtcclxuXHJcbiAgICAvLyBTZXQgcHJldmlvdXMmbmV4dCBidXR0b25zIFxyXG4gICAgdGhpcy5zdHlsZXMucHJldmlvdXNCdXR0b24gPSAnYnRuIGJ0bi1zZWNvbmRhcnkgbmctd2l6YXJkLWJ0bi1wcmV2JztcclxuICAgIHRoaXMuc3R5bGVzLm5leHRCdXR0b24gPSAnYnRuIGJ0bi1zZWNvbmRhcnkgbmctd2l6YXJkLWJ0bi1uZXh0JztcclxuICB9XHJcblxyXG4gIF9zZXRUb29sYmFyKCkge1xyXG4gICAgdGhpcy5zaG93VG9vbGJhclRvcCA9IHRoaXMuY29uZmlnLnRvb2xiYXJTZXR0aW5ncy50b29sYmFyUG9zaXRpb24gPT0gVE9PTEJBUl9QT1NJVElPTi50b3AgfHxcclxuICAgICAgdGhpcy5jb25maWcudG9vbGJhclNldHRpbmdzLnRvb2xiYXJQb3NpdGlvbiA9PSBUT09MQkFSX1BPU0lUSU9OLmJvdGg7XHJcblxyXG4gICAgdGhpcy5zaG93VG9vbGJhckJvdHRvbSA9IHRoaXMuY29uZmlnLnRvb2xiYXJTZXR0aW5ncy50b29sYmFyUG9zaXRpb24gPT0gVE9PTEJBUl9QT1NJVElPTi5ib3R0b20gfHxcclxuICAgICAgdGhpcy5jb25maWcudG9vbGJhclNldHRpbmdzLnRvb2xiYXJQb3NpdGlvbiA9PSBUT09MQkFSX1BPU0lUSU9OLmJvdGg7XHJcblxyXG4gICAgdGhpcy5zaG93UHJldmlvdXNCdXR0b24gPSB0aGlzLmNvbmZpZy50b29sYmFyU2V0dGluZ3Muc2hvd1ByZXZpb3VzQnV0dG9uO1xyXG4gICAgdGhpcy5zaG93TmV4dEJ1dHRvbiA9IHRoaXMuY29uZmlnLnRvb2xiYXJTZXR0aW5ncy5zaG93TmV4dEJ1dHRvbjtcclxuXHJcbiAgICB0aGlzLnNob3dFeHRyYUJ1dHRvbnMgPSB0aGlzLmNvbmZpZy50b29sYmFyU2V0dGluZ3MudG9vbGJhckV4dHJhQnV0dG9ucyAmJiB0aGlzLmNvbmZpZy50b29sYmFyU2V0dGluZ3MudG9vbGJhckV4dHJhQnV0dG9ucy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50cygpIHtcclxuICAgIC8vVE9ETzoga2V5TmF2aWdhdGlvblxyXG4gICAgLy8gS2V5Ym9hcmQgbmF2aWdhdGlvbiBldmVudFxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmtleU5hdmlnYXRpb24pIHtcclxuICAgICAgLy8gJChkb2N1bWVudCkua2V5dXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgLy8gICBtaS5fa2V5TmF2KGUpO1xyXG4gICAgICAvLyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9nZXRTdGVwQ3NzQ2xhc3Moc2VsZWN0ZWRTdGVwOiBOZ1dpemFyZFN0ZXApIHtcclxuICAgIGxldCBzdGVwQ2xhc3MgPSB0aGlzLnN0eWxlcy5zdGVwO1xyXG5cclxuICAgIHN3aXRjaCAoc2VsZWN0ZWRTdGVwLnN0YXRlKSB7XHJcbiAgICAgIGNhc2UgU1RFUF9TVEFURS5kaXNhYmxlZDpcclxuICAgICAgICBzdGVwQ2xhc3MgKz0gJyBkaXNhYmxlZCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU1RFUF9TVEFURS5lcnJvcjpcclxuICAgICAgICBzdGVwQ2xhc3MgKz0gJyBkYW5nZXInO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNURVBfU1RBVEUuaGlkZGVuOlxyXG4gICAgICAgIHN0ZXBDbGFzcyArPSAnIGhpZGRlbic7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChzZWxlY3RlZFN0ZXAuc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgU1RFUF9TVEFUVVMuZG9uZTpcclxuICAgICAgICBzdGVwQ2xhc3MgKz0gJyBkb25lJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTVEVQX1NUQVRVUy5hY3RpdmU6XHJcbiAgICAgICAgc3RlcENsYXNzICs9ICcgYWN0aXZlJztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RlcENsYXNzO1xyXG4gIH1cclxuXHJcbiAgX3Nob3dTZWxlY3RlZFN0ZXAoZXZlbnQ6IEV2ZW50LCBzZWxlY3RlZFN0ZXA6IE5nV2l6YXJkU3RlcCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuY29uZmlnLmFuY2hvclNldHRpbmdzLmFuY2hvckNsaWNrYWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5hbmNob3JTZXR0aW5ncy5lbmFibGVBbmNob3JPbkRvbmVTdGVwICYmIHNlbGVjdGVkU3RlcC5zdGF0dXMgPT0gU1RFUF9TVEFUVVMuZG9uZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRTdGVwLmluZGV4ICE9IHRoaXMuY3VycmVudFN0ZXBJbmRleCkge1xyXG4gICAgICBpZiAodGhpcy5jb25maWcuYW5jaG9yU2V0dGluZ3MuZW5hYmxlQWxsQW5jaG9ycyAmJiB0aGlzLmNvbmZpZy5hbmNob3JTZXR0aW5ncy5hbmNob3JDbGlja2FibGUpIHtcclxuICAgICAgICB0aGlzLl9zaG93U3RlcChzZWxlY3RlZFN0ZXAuaW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFN0ZXAuc3RhdHVzID09IFNURVBfU1RBVFVTLmRvbmUpIHtcclxuICAgICAgICAgIHRoaXMuX3Nob3dTdGVwKHNlbGVjdGVkU3RlcC5pbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2hvd05leHRTdGVwKGV2ZW50PzogRXZlbnQpIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgLy8gRmluZCB0aGUgbmV4dCBub3QgZGlzYWJsZWQgJiBoaWRkZW4gc3RlcFxyXG4gICAgbGV0IGZpbHRlcmVkU3RlcHMgPSB0aGlzLnN0ZXBzLmZpbHRlcihzdGVwID0+IHtcclxuICAgICAgcmV0dXJuIHN0ZXAuaW5kZXggPiAodGhpcy5jdXJyZW50U3RlcEluZGV4ID09IG51bGwgPyAtMSA6IHRoaXMuY3VycmVudFN0ZXBJbmRleClcclxuICAgICAgICAmJiBzdGVwLnN0YXRlICE9IFNURVBfU1RBVEUuZGlzYWJsZWRcclxuICAgICAgICAmJiBzdGVwLnN0YXRlICE9IFNURVBfU1RBVEUuaGlkZGVuO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGZpbHRlcmVkU3RlcHMubGVuZ3RoID09IDApIHtcclxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jeWNsZVN0ZXBzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9zaG93U3RlcCgwKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX3Nob3dTdGVwKGZpbHRlcmVkU3RlcHMuc2hpZnQoKS5pbmRleClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zaG93UHJldmlvdXNTdGVwKGV2ZW50PzogRXZlbnQpIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgLy8gRmluZCB0aGUgcHJldmlvdXMgbm90IGRpc2FibGVkICYgaGlkZGVuIHN0ZXBcclxuICAgIGxldCBmaWx0ZXJlZFN0ZXBzID0gdGhpcy5zdGVwcy5maWx0ZXIoc3RlcCA9PiB7XHJcbiAgICAgIHJldHVybiBzdGVwLmluZGV4IDwgKHRoaXMuY3VycmVudFN0ZXBJbmRleCA9PSBudWxsICYmIHRoaXMuY29uZmlnLmN5Y2xlU3RlcHMgPyB0aGlzLnN0ZXBzLmxlbmd0aCA6IHRoaXMuY3VycmVudFN0ZXBJbmRleClcclxuICAgICAgICAmJiBzdGVwLnN0YXRlICE9IFNURVBfU1RBVEUuZGlzYWJsZWRcclxuICAgICAgICAmJiBzdGVwLnN0YXRlICE9IFNURVBfU1RBVEUuaGlkZGVuO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGZpbHRlcmVkU3RlcHMubGVuZ3RoID09IDApIHtcclxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jeWNsZVN0ZXBzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9zaG93U3RlcCh0aGlzLnN0ZXBzLmxlbmd0aCAtIDEpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5fc2hvd1N0ZXAoZmlsdGVyZWRTdGVwcy5wb3AoKS5pbmRleClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zaG93U3RlcChzZWxlY3RlZFN0ZXBJbmRleDogbnVtYmVyKSB7XHJcbiAgICAvLyBJZiBzdGVwIG5vdCBmb3VuZCwgc2tpcFxyXG4gICAgaWYgKHNlbGVjdGVkU3RlcEluZGV4ID49IHRoaXMuc3RlcHMubGVuZ3RoIHx8IHNlbGVjdGVkU3RlcEluZGV4IDwgMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgY3VycmVudCBzdGVwIGlzIHJlcXVlc3RlZCBhZ2Fpbiwgc2tpcFxyXG4gICAgaWYgKHNlbGVjdGVkU3RlcEluZGV4ID09IHRoaXMuY3VycmVudFN0ZXBJbmRleCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNlbGVjdGVkU3RlcCA9IHRoaXMuc3RlcHMudG9BcnJheSgpW3NlbGVjdGVkU3RlcEluZGV4XTtcclxuXHJcbiAgICAvLyBJZiBpdCBpcyBhIGRpc2FibGVkIG9yIGhpZGRlbiBzdGVwLCBza2lwXHJcbiAgICBpZiAoc2VsZWN0ZWRTdGVwLnN0YXRlID09IFNURVBfU1RBVEUuZGlzYWJsZWQgfHwgc2VsZWN0ZWRTdGVwLnN0YXRlID09IFNURVBfU1RBVEUuaGlkZGVuKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zaG93TG9hZGVyKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2lzU3RlcENoYW5nZVZhbGlkKHNlbGVjdGVkU3RlcCwgdGhpcy5jdXJyZW50U3RlcCAmJiB0aGlzLmN1cnJlbnRTdGVwLmNhbkV4aXQpLnRvUHJvbWlzZSgpXHJcbiAgICAgIC50aGVuKGlzVmFsaWQgPT4ge1xyXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5faXNTdGVwQ2hhbmdlVmFsaWQoc2VsZWN0ZWRTdGVwLCBzZWxlY3RlZFN0ZXAuY2FuRW50ZXIpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9mKGlzVmFsaWQpLnRvUHJvbWlzZSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihpc1ZhbGlkID0+IHtcclxuICAgICAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgICAgLy8gTG9hZCBzdGVwIGNvbnRlbnRcclxuICAgICAgICAgIHRoaXMuX2xvYWRTdGVwQ29udGVudChzZWxlY3RlZFN0ZXApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5faGlkZUxvYWRlcigpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2lzU3RlcENoYW5nZVZhbGlkKHNlbGVjdGVkU3RlcCwgY29uZGl0aW9uOiBib29sZWFuIHwgKChhcmdzOiBTdGVwVmFsaWRhdGlvbkFyZ3MpID0+IGJvb2xlYW4pIHwgKChhcmdzOiBTdGVwVmFsaWRhdGlvbkFyZ3MpID0+IE9ic2VydmFibGU8Ym9vbGVhbj4pKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICBpZiAodHlwZW9mIGNvbmRpdGlvbiA9PT0gdHlwZW9mIHRydWUpIHtcclxuICAgICAgcmV0dXJuIG9mKDxib29sZWFuPmNvbmRpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoY29uZGl0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuX2dldFN0ZXBEaXJlY3Rpb24oc2VsZWN0ZWRTdGVwLmluZGV4KTtcclxuICAgICAgbGV0IHJlc3VsdCA9IGNvbmRpdGlvbih7IGRpcmVjdGlvbjogZGlyZWN0aW9uLCBmcm9tU3RlcDogdGhpcy5jdXJyZW50U3RlcCwgdG9TdGVwOiBzZWxlY3RlZFN0ZXAgfSk7XHJcblxyXG4gICAgICBpZiAoaXNPYnNlcnZhYmxlPGJvb2xlYW4+KHJlc3VsdCkpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXN1bHQgPT09IHR5cGVvZiB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIG9mKDxib29sZWFuPnJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvZih0cnVlKTtcclxuICB9XHJcblxyXG4gIF9sb2FkU3RlcENvbnRlbnQoc2VsZWN0ZWRTdGVwOiBOZ1dpemFyZFN0ZXApIHtcclxuICAgIC8vIFVwZGF0ZSBjb250cm9sc1xyXG4gICAgdGhpcy5fc2V0QW5jaG9yKHNlbGVjdGVkU3RlcCk7XHJcbiAgICAvLyBTZXQgdGhlIGJ1dHRvbnMgYmFzZWQgb24gdGhlIHN0ZXBcclxuICAgIHRoaXMuX3NldEJ1dHRvbnMoc2VsZWN0ZWRTdGVwLmluZGV4KTtcclxuXHJcbiAgICAvLyBUcmlnZ2VyIFwic3RlcENoYW5nZWRcIiBldmVudFxyXG4gICAgY29uc3QgYXJncyA9IDxTdGVwQ2hhbmdlZEFyZ3M+e1xyXG4gICAgICBzdGVwOiBzZWxlY3RlZFN0ZXAsXHJcbiAgICAgIHByZXZpb3VzU3RlcDogdGhpcy5jdXJyZW50U3RlcCxcclxuICAgICAgZGlyZWN0aW9uOiB0aGlzLl9nZXRTdGVwRGlyZWN0aW9uKHNlbGVjdGVkU3RlcC5pbmRleCksXHJcbiAgICAgIHBvc2l0aW9uOiB0aGlzLl9nZXRTdGVwUG9zaXRpb24oc2VsZWN0ZWRTdGVwLmluZGV4KVxyXG4gICAgfTtcclxuICAgIHRoaXMuc3RlcENoYW5nZWQuZW1pdChhcmdzKTtcclxuICAgIHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zdGVwQ2hhbmdlZChhcmdzKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGN1cnJlbnQgaW5kZXhcclxuICAgIHRoaXMuY3VycmVudFN0ZXBJbmRleCA9IHNlbGVjdGVkU3RlcC5pbmRleDtcclxuICAgIHRoaXMuY3VycmVudFN0ZXAgPSBzZWxlY3RlZFN0ZXA7XHJcbiAgfVxyXG5cclxuICBfc2V0QW5jaG9yKHNlbGVjdGVkU3RlcDogTmdXaXphcmRTdGVwKSB7XHJcbiAgICAvLyBDdXJyZW50IHN0ZXAgYW5jaG9yID4gUmVtb3ZlIG90aGVyIGNsYXNzZXMgYW5kIGFkZCBkb25lIGNsYXNzXHJcbiAgICBpZiAodGhpcy5jdXJyZW50U3RlcCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTdGVwLnN0YXR1cyA9IFNURVBfU1RBVFVTLnVudG91Y2hlZDtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmNob3JTZXR0aW5ncy5tYXJrRG9uZVN0ZXApIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwLnN0YXR1cyA9IFNURVBfU1RBVFVTLmRvbmU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmNob3JTZXR0aW5ncy5yZW1vdmVEb25lU3RlcE9uTmF2aWdhdGVCYWNrKSB7XHJcbiAgICAgICAgICB0aGlzLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGVwLmluZGV4ID4gc2VsZWN0ZWRTdGVwLmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgc3RlcC5zdGF0dXMgPSBTVEVQX1NUQVRVUy51bnRvdWNoZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5leHQgc3RlcCBhbmNob3IgPiBSZW1vdmUgb3RoZXIgY2xhc3NlcyBhbmQgYWRkIGFjdGl2ZSBjbGFzc1xyXG4gICAgc2VsZWN0ZWRTdGVwLnN0YXR1cyA9IFNURVBfU1RBVFVTLmFjdGl2ZTtcclxuICB9XHJcblxyXG4gIF9zZXRCdXR0b25zKGluZGV4OiBudW1iZXIpIHtcclxuICAgIC8vIFByZXZpb3VzL05leHQgQnV0dG9uIGVuYWJsZS9kaXNhYmxlIGJhc2VkIG9uIHN0ZXBcclxuICAgIGlmICghdGhpcy5jb25maWcuY3ljbGVTdGVwcykge1xyXG4gICAgICBpZiAoMCA+PSBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGVzLnByZXZpb3VzQnV0dG9uID0gJ2J0biBidG4tc2Vjb25kYXJ5IG5nLXdpemFyZC1idG4tcHJldiBkaXNhYmxlZCc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZXMucHJldmlvdXNCdXR0b24gPSAnYnRuIGJ0bi1zZWNvbmRhcnkgbmctd2l6YXJkLWJ0bi1wcmV2JztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuc3RlcHMubGVuZ3RoIC0gMSA8PSBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGVzLm5leHRCdXR0b24gPSAnYnRuIGJ0bi1zZWNvbmRhcnkgbmctd2l6YXJkLWJ0bi1uZXh0IGRpc2FibGVkJztcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnN0eWxlcy5uZXh0QnV0dG9uID0gJ2J0biBidG4tc2Vjb25kYXJ5IG5nLXdpemFyZC1idG4tbmV4dCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9leHRyYUJ1dHRvbkNsaWNrZWQoYnV0dG9uOiBUb29sYmFyQnV0dG9uKSB7XHJcbiAgICBpZiAoYnV0dG9uLmV2ZW50KSB7XHJcbiAgICAgIGJ1dHRvbi5ldmVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSEVMUEVSIEZVTkNUSU9OU1xyXG4gIF9rZXlOYXYoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIC8vIEtleWJvYXJkIG5hdmlnYXRpb25cclxuICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcclxuICAgICAgY2FzZSAzNzpcclxuICAgICAgICAvLyBsZWZ0XHJcbiAgICAgICAgdGhpcy5fc2hvd1ByZXZpb3VzU3RlcChldmVudCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOTpcclxuICAgICAgICAvLyByaWdodFxyXG4gICAgICAgIHRoaXMuX3Nob3dOZXh0U3RlcChldmVudCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm47IC8vIGV4aXQgdGhpcyBoYW5kbGVyIGZvciBvdGhlciBrZXlzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2hvd0xvYWRlcigpIHtcclxuICAgIHRoaXMuc3R5bGVzLm1haW4gPSAnbmctd2l6YXJkLW1haW4gbmctd2l6YXJkLXRoZW1lLScgKyB0aGlzLmNvbmZpZy50aGVtZSArICcgbmctd2l6YXJkLWxvYWRpbmcnO1xyXG4gIH1cclxuXHJcbiAgX2hpZGVMb2FkZXIoKSB7XHJcbiAgICB0aGlzLnN0eWxlcy5tYWluID0gJ25nLXdpemFyZC1tYWluIG5nLXdpemFyZC10aGVtZS0nICsgdGhpcy5jb25maWcudGhlbWU7XHJcbiAgfVxyXG5cclxuICBfZ2V0U3RlcERpcmVjdGlvbihzZWxlY3RlZFN0ZXBJbmRleDogbnVtYmVyKTogU1RFUF9ESVJFQ1RJTiB7XHJcbiAgICByZXR1cm4gKHRoaXMuY3VycmVudFN0ZXBJbmRleCAhPSBudWxsICYmIHRoaXMuY3VycmVudFN0ZXBJbmRleCAhPSBzZWxlY3RlZFN0ZXBJbmRleCkgP1xyXG4gICAgICAodGhpcy5jdXJyZW50U3RlcEluZGV4IDwgc2VsZWN0ZWRTdGVwSW5kZXggPyBTVEVQX0RJUkVDVElOLmZvcndhcmQgOiBTVEVQX0RJUkVDVElOLmJhY2t3YXJkKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBfZ2V0U3RlcFBvc2l0aW9uKHNlbGVjdGVkU3RlcEluZGV4OiBudW1iZXIpOiBTVEVQX1BPU0lUSU9OIHtcclxuICAgIHJldHVybiAoc2VsZWN0ZWRTdGVwSW5kZXggPT0gMCkgPyBTVEVQX1BPU0lUSU9OLmZpcnN0IDogKHNlbGVjdGVkU3RlcEluZGV4ID09IHRoaXMuc3RlcHMubGVuZ3RoIC0gMSA/IFNURVBfUE9TSVRJT04uZmluYWwgOiBTVEVQX1BPU0lUSU9OLm1pZGRsZSk7XHJcbiAgfVxyXG5cclxuICAvLyBQVUJMSUMgRlVOQ1RJT05TXHJcbiAgX3NldFRoZW1lKHRoZW1lOiBUSEVNRSkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLnRoZW1lID09IHRoZW1lKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbmZpZy50aGVtZSA9IHRoZW1lO1xyXG4gICAgdGhpcy5zdHlsZXMubWFpbiA9ICduZy13aXphcmQtbWFpbiBuZy13aXphcmQtdGhlbWUtJyArIHRoaXMuY29uZmlnLnRoZW1lO1xyXG5cclxuICAgIC8vIFRyaWdnZXIgXCJ0aGVtZUNoYW5nZWRcIiBldmVudFxyXG4gICAgdGhpcy50aGVtZUNoYW5nZWQuZW1pdCh0aGlzLmNvbmZpZy50aGVtZSk7XHJcbiAgfVxyXG5cclxuICBfcmVzZXQoKSB7XHJcbiAgICAvLyBSZXNldCBhbGwgZWxlbWVudHMgYW5kIGNsYXNzZXNcclxuICAgIHRoaXMuY3VycmVudFN0ZXBJbmRleCA9IG51bGw7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gbnVsbDtcclxuICAgIHRoaXMuX3Jlc3RvcmVTdGVwU3RhdGVzKCk7XHJcbiAgICB0aGlzLl9pbml0KCk7XHJcblxyXG4gICAgLy8gVHJpZ2dlciBcInJlc2V0ZWRcIiBldmVudFxyXG4gICAgdGhpcy5yZXNldGVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMucmVzZXRXaXphcmRXYXRjaGVyKSB7XHJcbiAgICAgIHRoaXMucmVzZXRXaXphcmRXYXRjaGVyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd05leHRTdGVwV2F0Y2hlcikge1xyXG4gICAgICB0aGlzLnNob3dOZXh0U3RlcFdhdGNoZXIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zaG93UHJldmlvdXNTdGVwV2F0Y2hlcikge1xyXG4gICAgICB0aGlzLnNob3dQcmV2aW91c1N0ZXBXYXRjaGVyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd1N0ZXBXYXRjaGVyKSB7XHJcbiAgICAgIHRoaXMuc2hvd1N0ZXBXYXRjaGVyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0VGhlbWVXYXRjaGVyKSB7XHJcbiAgICAgIHRoaXMuc2V0VGhlbWVXYXRjaGVyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
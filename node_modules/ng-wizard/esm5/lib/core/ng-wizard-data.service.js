import { __assign, __decorate, __metadata, __param } from "tslib";
import { Injectable, Optional, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { DEFAULT_CONFIG } from '../utils/constants';
import { NG_WIZARD_CONFIG_TOKEN } from './ng-wizard-config.token';
import { merge } from '../utils/functions';
import * as i0 from "@angular/core";
import * as i1 from "./ng-wizard-config.token";
var NgWizardDataService = /** @class */ (function () {
    function NgWizardDataService(config) {
        this.config = config;
        this._defaultConfig = __assign({}, DEFAULT_CONFIG);
        if (this.config) {
            this._defaultConfig = merge(this._defaultConfig, this.config);
        }
        // Observable sources
        this._resetWizard = new Subject();
        this._showNextStep = new Subject();
        this._showPreviousStep = new Subject();
        this._showStep = new Subject();
        this._setTheme = new Subject();
        this._stepChangedArgs = new Subject();
        // Observable streams
        this.resetWizard$ = this._resetWizard.asObservable();
        this.showNextStep$ = this._showNextStep.asObservable();
        this.showPreviousStep$ = this._showPreviousStep.asObservable();
        this.showStep$ = this._showStep.asObservable();
        this.setTheme$ = this._setTheme.asObservable();
        this.stepChangedArgs$ = this._stepChangedArgs.asObservable();
    }
    NgWizardDataService.prototype.getDefaultConfig = function () {
        return __assign({}, this._defaultConfig);
    };
    NgWizardDataService.prototype.resetWizard = function () {
        this._resetWizard.next();
    };
    NgWizardDataService.prototype.showNextStep = function () {
        this._showNextStep.next();
    };
    NgWizardDataService.prototype.showPreviousStep = function () {
        this._showPreviousStep.next();
    };
    NgWizardDataService.prototype.showStep = function (index) {
        this._showStep.next(index);
    };
    NgWizardDataService.prototype.setTheme = function (theme) {
        this._setTheme.next(theme);
    };
    NgWizardDataService.prototype.stepChanged = function (args) {
        this._stepChangedArgs.next(args);
    };
    NgWizardDataService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NG_WIZARD_CONFIG_TOKEN,] }] }
    ]; };
    NgWizardDataService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgWizardDataService_Factory() { return new NgWizardDataService(i0.ɵɵinject(i1.NG_WIZARD_CONFIG_TOKEN, 8)); }, token: NgWizardDataService, providedIn: "root" });
    NgWizardDataService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Optional()), __param(0, Inject(NG_WIZARD_CONFIG_TOKEN)),
        __metadata("design:paramtypes", [Object])
    ], NgWizardDataService);
    return NgWizardDataService;
}());
export { NgWizardDataService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL25nLXdpemFyZC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUszQztJQWdCRSw2QkFBZ0UsTUFBc0I7UUFBdEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDcEYsSUFBSSxDQUFDLGNBQWMsZ0JBQVEsY0FBYyxDQUFFLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0Q7UUFFRCxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUV2RCxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsOENBQWdCLEdBQWhCO1FBQ0Usb0JBQVksSUFBSSxDQUFDLGNBQWMsRUFBRztJQUNwQyxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDBDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsS0FBWTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLElBQXFCO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0RBakRZLFFBQVEsWUFBSSxNQUFNLFNBQUMsc0JBQXNCOzs7SUFoQjNDLG1CQUFtQjtRQUgvQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBaUJhLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBOztPQWhCNUMsbUJBQW1CLENBa0UvQjs4QkE5RUQ7Q0E4RUMsQUFsRUQsSUFrRUM7U0FsRVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IE5HX1dJWkFSRF9DT05GSUdfVE9LRU4gfSBmcm9tICcuL25nLXdpemFyZC1jb25maWcudG9rZW4nO1xyXG5pbXBvcnQgeyBOZ1dpemFyZENvbmZpZywgU3RlcENoYW5nZWRBcmdzIH0gZnJvbSAnLi4vdXRpbHMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFRIRU1FIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4uL3V0aWxzL2Z1bmN0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1dpemFyZERhdGFTZXJ2aWNlIHtcclxuICByZXNldFdpemFyZCQ6IE9ic2VydmFibGU8YW55PjtcclxuICBzaG93TmV4dFN0ZXAkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgc2hvd1ByZXZpb3VzU3RlcCQ6IE9ic2VydmFibGU8YW55PjtcclxuICBzaG93U3RlcCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuICBzZXRUaGVtZSQ6IE9ic2VydmFibGU8VEhFTUU+O1xyXG4gIHN0ZXBDaGFuZ2VkQXJncyQ6IE9ic2VydmFibGU8U3RlcENoYW5nZWRBcmdzPjtcclxuXHJcbiAgcHJpdmF0ZSBfcmVzZXRXaXphcmQ6IFN1YmplY3Q8YW55PjtcclxuICBwcml2YXRlIF9zaG93TmV4dFN0ZXA6IFN1YmplY3Q8YW55PjtcclxuICBwcml2YXRlIF9zaG93UHJldmlvdXNTdGVwOiBTdWJqZWN0PGFueT47XHJcbiAgcHJpdmF0ZSBfc2hvd1N0ZXA6IFN1YmplY3Q8bnVtYmVyPjtcclxuICBwcml2YXRlIF9zZXRUaGVtZTogU3ViamVjdDxUSEVNRT47XHJcbiAgcHJpdmF0ZSBfc3RlcENoYW5nZWRBcmdzOiBTdWJqZWN0PFN0ZXBDaGFuZ2VkQXJncz47XHJcbiAgcHJpdmF0ZSBfZGVmYXVsdENvbmZpZzogTmdXaXphcmRDb25maWc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTkdfV0laQVJEX0NPTkZJR19UT0tFTikgcHJpdmF0ZSBjb25maWc6IE5nV2l6YXJkQ29uZmlnKSB7XHJcbiAgICB0aGlzLl9kZWZhdWx0Q29uZmlnID0geyAuLi5ERUZBVUxUX0NPTkZJRyB9O1xyXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuX2RlZmF1bHRDb25maWcgPSBtZXJnZSh0aGlzLl9kZWZhdWx0Q29uZmlnLCB0aGlzLmNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzb3VyY2VzXHJcbiAgICB0aGlzLl9yZXNldFdpemFyZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIHRoaXMuX3Nob3dOZXh0U3RlcCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIHRoaXMuX3Nob3dQcmV2aW91c1N0ZXAgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICB0aGlzLl9zaG93U3RlcCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIHRoaXMuX3NldFRoZW1lID0gbmV3IFN1YmplY3Q8VEhFTUU+KCk7XHJcbiAgICB0aGlzLl9zdGVwQ2hhbmdlZEFyZ3MgPSBuZXcgU3ViamVjdDxTdGVwQ2hhbmdlZEFyZ3M+KCk7XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJlYW1zXHJcbiAgICB0aGlzLnJlc2V0V2l6YXJkJCA9IHRoaXMuX3Jlc2V0V2l6YXJkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgdGhpcy5zaG93TmV4dFN0ZXAkID0gdGhpcy5fc2hvd05leHRTdGVwLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgdGhpcy5zaG93UHJldmlvdXNTdGVwJCA9IHRoaXMuX3Nob3dQcmV2aW91c1N0ZXAuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB0aGlzLnNob3dTdGVwJCA9IHRoaXMuX3Nob3dTdGVwLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgdGhpcy5zZXRUaGVtZSQgPSB0aGlzLl9zZXRUaGVtZS5hc09ic2VydmFibGUoKTtcclxuICAgIHRoaXMuc3RlcENoYW5nZWRBcmdzJCA9IHRoaXMuX3N0ZXBDaGFuZ2VkQXJncy5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldERlZmF1bHRDb25maWcoKTogTmdXaXphcmRDb25maWcge1xyXG4gICAgcmV0dXJuIHsgLi4udGhpcy5fZGVmYXVsdENvbmZpZyB9O1xyXG4gIH1cclxuXHJcbiAgcmVzZXRXaXphcmQoKSB7XHJcbiAgICB0aGlzLl9yZXNldFdpemFyZC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBzaG93TmV4dFN0ZXAoKSB7XHJcbiAgICB0aGlzLl9zaG93TmV4dFN0ZXAubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1ByZXZpb3VzU3RlcCgpIHtcclxuICAgIHRoaXMuX3Nob3dQcmV2aW91c1N0ZXAubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1N0ZXAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5fc2hvd1N0ZXAubmV4dChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBzZXRUaGVtZSh0aGVtZTogVEhFTUUpIHtcclxuICAgIHRoaXMuX3NldFRoZW1lLm5leHQodGhlbWUpO1xyXG4gIH1cclxuXHJcbiAgc3RlcENoYW5nZWQoYXJnczogU3RlcENoYW5nZWRBcmdzKSB7XHJcbiAgICB0aGlzLl9zdGVwQ2hhbmdlZEFyZ3MubmV4dChhcmdzKTtcclxuICB9XHJcbn1cclxuIl19
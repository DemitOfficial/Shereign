import { __decorate, __extends, __metadata } from "tslib";
import { Component, ComponentFactoryResolver, forwardRef, OnInit, ViewChild } from '@angular/core';
import { STEP_STATE } from '../../utils/enums';
import { NgWizardStep } from '../../utils/interfaces';
import { NgWizardStepContentDirective } from '../ng-wizard-step-content.directive';
var NgWizardStepComponent = /** @class */ (function (_super) {
    __extends(NgWizardStepComponent, _super);
    function NgWizardStepComponent(componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        return _this;
    }
    NgWizardStepComponent_1 = NgWizardStepComponent;
    NgWizardStepComponent.prototype.ngOnInit = function () {
        this.loadComponent();
    };
    NgWizardStepComponent.prototype.loadComponent = function () {
        if (!this.component) {
            return;
        }
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        this.stepContent.viewContainerRef.clear();
        this.componentRef = this.stepContent.viewContainerRef.createComponent(componentFactory);
    };
    Object.defineProperty(NgWizardStepComponent.prototype, "isHidden", {
        get: function () {
            return this.state == STEP_STATE.hidden;
        },
        enumerable: true,
        configurable: true
    });
    var NgWizardStepComponent_1;
    NgWizardStepComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    __decorate([
        ViewChild(NgWizardStepContentDirective, { static: true }),
        __metadata("design:type", NgWizardStepContentDirective)
    ], NgWizardStepComponent.prototype, "stepContent", void 0);
    NgWizardStepComponent = NgWizardStepComponent_1 = __decorate([
        Component({
            selector: 'ng-wizard-step',
            template: "<div class=\"tab-pane step-content\" style=\"display: block\">\r\n    <ng-content></ng-content>\r\n    <ng-template ngWizardStepContent></ng-template>\r\n</div>",
            providers: [
                { provide: NgWizardStep, useExisting: forwardRef(function () { return NgWizardStepComponent_1; }) }
            ],
            styles: [""]
        }),
        __metadata("design:paramtypes", [ComponentFactoryResolver])
    ], NgWizardStepComponent);
    return NgWizardStepComponent;
}(NgWizardStep));
export { NgWizardStepComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctd2l6YXJkLyIsInNvdXJjZXMiOlsibGliL2NvcmUvd2l6YXJkLXN0ZXAvbmctd2l6YXJkLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFVbkY7SUFBMkMseUNBQVk7SUFHckQsK0JBQ1Usd0JBQWtEO1FBRDVELFlBR0UsaUJBQU8sU0FDUjtRQUhTLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7O0lBRzVELENBQUM7OEJBUFUscUJBQXFCO0lBU2hDLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDZDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFFRCxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFN0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVELHNCQUFJLDJDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTs7O2dCQXRCbUMsd0JBQXdCOztJQUhEO1FBQTFELFNBQVMsQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBYyw0QkFBNEI7OERBQUM7SUFEMUYscUJBQXFCO1FBUmpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsNEtBQThDO1lBRTlDLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXFCLEVBQXJCLENBQXFCLENBQUMsRUFBRTthQUNoRjs7U0FDRixDQUFDO3lDQUtvQyx3QkFBd0I7T0FKakQscUJBQXFCLENBMkJqQztJQUFELDRCQUFDO0NBQUEsQUEzQkQsQ0FBMkMsWUFBWSxHQTJCdEQ7U0EzQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGZvcndhcmRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNURVBfU1RBVEUgfSBmcm9tICcuLi8uLi91dGlscy9lbnVtcyc7XHJcbmltcG9ydCB7IE5nV2l6YXJkU3RlcCB9IGZyb20gJy4uLy4uL3V0aWxzL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBOZ1dpemFyZFN0ZXBDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vbmctd2l6YXJkLXN0ZXAtY29udGVudC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy13aXphcmQtc3RlcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25nLXdpemFyZC1zdGVwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uZy13aXphcmQtc3RlcC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7IHByb3ZpZGU6IE5nV2l6YXJkU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdXaXphcmRTdGVwQ29tcG9uZW50KSB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdXaXphcmRTdGVwQ29tcG9uZW50IGV4dGVuZHMgTmdXaXphcmRTdGVwIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKE5nV2l6YXJkU3RlcENvbnRlbnREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHN0ZXBDb250ZW50OiBOZ1dpemFyZFN0ZXBDb250ZW50RGlyZWN0aXZlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxvYWRDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIGxvYWRDb21wb25lbnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29tcG9uZW50KTtcclxuXHJcbiAgICB0aGlzLnN0ZXBDb250ZW50LnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcclxuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5zdGVwQ29udGVudC52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcclxuICB9XHJcblxyXG4gIGdldCBpc0hpZGRlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlID09IFNURVBfU1RBVEUuaGlkZGVuO1xyXG4gIH1cclxufVxyXG4iXX0=
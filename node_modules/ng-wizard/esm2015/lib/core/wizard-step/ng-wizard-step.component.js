var NgWizardStepComponent_1;
import { __decorate, __metadata } from "tslib";
import { Component, ComponentFactoryResolver, forwardRef, OnInit, ViewChild } from '@angular/core';
import { STEP_STATE } from '../../utils/enums';
import { NgWizardStep } from '../../utils/interfaces';
import { NgWizardStepContentDirective } from '../ng-wizard-step-content.directive';
let NgWizardStepComponent = NgWizardStepComponent_1 = class NgWizardStepComponent extends NgWizardStep {
    constructor(componentFactoryResolver) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() {
        this.loadComponent();
    }
    loadComponent() {
        if (!this.component) {
            return;
        }
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        this.stepContent.viewContainerRef.clear();
        this.componentRef = this.stepContent.viewContainerRef.createComponent(componentFactory);
    }
    get isHidden() {
        return this.state == STEP_STATE.hidden;
    }
};
NgWizardStepComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
__decorate([
    ViewChild(NgWizardStepContentDirective, { static: true }),
    __metadata("design:type", NgWizardStepContentDirective)
], NgWizardStepComponent.prototype, "stepContent", void 0);
NgWizardStepComponent = NgWizardStepComponent_1 = __decorate([
    Component({
        selector: 'ng-wizard-step',
        template: "<div class=\"tab-pane step-content\" style=\"display: block\">\r\n    <ng-content></ng-content>\r\n    <ng-template ngWizardStepContent></ng-template>\r\n</div>",
        providers: [
            { provide: NgWizardStep, useExisting: forwardRef(() => NgWizardStepComponent_1) }
        ],
        styles: [""]
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver])
], NgWizardStepComponent);
export { NgWizardStepComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctd2l6YXJkLyIsInNvdXJjZXMiOlsibGliL2NvcmUvd2l6YXJkLXN0ZXAvbmctd2l6YXJkLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBVW5GLElBQWEscUJBQXFCLDZCQUFsQyxNQUFhLHFCQUFzQixTQUFRLFlBQVk7SUFHckQsWUFDVSx3QkFBa0Q7UUFFMUQsS0FBSyxFQUFFLENBQUM7UUFGQSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBRzVELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTdGLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0NBQ0YsQ0FBQTs7WUF2QnFDLHdCQUF3Qjs7QUFIRDtJQUExRCxTQUFTLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQWMsNEJBQTRCOzBEQUFDO0FBRDFGLHFCQUFxQjtJQVJqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLDRLQUE4QztRQUU5QyxTQUFTLEVBQUU7WUFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBcUIsQ0FBQyxFQUFFO1NBQ2hGOztLQUNGLENBQUM7cUNBS29DLHdCQUF3QjtHQUpqRCxxQkFBcUIsQ0EyQmpDO1NBM0JZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBmb3J3YXJkUmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTVEVQX1NUQVRFIH0gZnJvbSAnLi4vLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgeyBOZ1dpemFyZFN0ZXAgfSBmcm9tICcuLi8uLi91dGlscy9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgTmdXaXphcmRTdGVwQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uL25nLXdpemFyZC1zdGVwLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmctd2l6YXJkLXN0ZXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy13aXphcmQtc3RlcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmctd2l6YXJkLXN0ZXAuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgeyBwcm92aWRlOiBOZ1dpemFyZFN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nV2l6YXJkU3RlcENvbXBvbmVudCkgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nV2l6YXJkU3RlcENvbXBvbmVudCBleHRlbmRzIE5nV2l6YXJkU3RlcCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZChOZ1dpemFyZFN0ZXBDb250ZW50RGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBzdGVwQ29udGVudDogTmdXaXphcmRTdGVwQ29udGVudERpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5sb2FkQ29tcG9uZW50KCk7XHJcbiAgfVxyXG5cclxuICBsb2FkQ29tcG9uZW50KCkge1xyXG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbXBvbmVudCk7XHJcblxyXG4gICAgdGhpcy5zdGVwQ29udGVudC52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuc3RlcENvbnRlbnQudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNIaWRkZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PSBTVEVQX1NUQVRFLmhpZGRlbjtcclxuICB9XHJcbn1cclxuIl19
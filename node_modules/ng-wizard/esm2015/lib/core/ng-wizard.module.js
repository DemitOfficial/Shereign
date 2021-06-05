var NgWizardModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_WIZARD_CONFIG_TOKEN } from './ng-wizard-config.token';
import { NgWizardStepComponent } from './wizard-step/ng-wizard-step.component';
import { NgWizardComponent } from './wizard/ng-wizard.component';
import { NgWizardStepContentDirective } from './ng-wizard-step-content.directive';
let NgWizardModule = NgWizardModule_1 = class NgWizardModule {
    /**
     * forRoot
     * @returns A module with its provider dependencies
     */
    static forRoot(ngWizardConfig) {
        return {
            ngModule: NgWizardModule_1,
            providers: [
                {
                    provide: NG_WIZARD_CONFIG_TOKEN,
                    useValue: ngWizardConfig
                }
            ]
        };
    }
};
NgWizardModule = NgWizardModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [NgWizardComponent, NgWizardStepComponent, NgWizardStepContentDirective],
        exports: [NgWizardComponent, NgWizardStepComponent]
    })
], NgWizardModule);
export { NgWizardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL25nLXdpemFyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFPbEYsSUFBYSxjQUFjLHNCQUEzQixNQUFhLGNBQWM7SUFDekI7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUE4QjtRQUMzQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixRQUFRLEVBQUUsY0FBYztpQkFDekI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWhCWSxjQUFjO0lBTDFCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSw0QkFBNEIsQ0FBQztRQUN0RixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQztLQUNwRCxDQUFDO0dBQ1csY0FBYyxDQWdCMUI7U0FoQlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBOZ1dpemFyZENvbmZpZyB9IGZyb20gJy4uL3V0aWxzL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBOR19XSVpBUkRfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9uZy13aXphcmQtY29uZmlnLnRva2VuJztcclxuaW1wb3J0IHsgTmdXaXphcmRTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi93aXphcmQtc3RlcC9uZy13aXphcmQtc3RlcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ1dpemFyZENvbXBvbmVudCB9IGZyb20gJy4vd2l6YXJkL25nLXdpemFyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ1dpemFyZFN0ZXBDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9uZy13aXphcmQtc3RlcC1jb250ZW50LmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05nV2l6YXJkQ29tcG9uZW50LCBOZ1dpemFyZFN0ZXBDb21wb25lbnQsIE5nV2l6YXJkU3RlcENvbnRlbnREaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtOZ1dpemFyZENvbXBvbmVudCwgTmdXaXphcmRTdGVwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdXaXphcmRNb2R1bGUge1xyXG4gIC8qKlxyXG4gICAqIGZvclJvb3RcclxuICAgKiBAcmV0dXJucyBBIG1vZHVsZSB3aXRoIGl0cyBwcm92aWRlciBkZXBlbmRlbmNpZXNcclxuICAgKi9cclxuICBzdGF0aWMgZm9yUm9vdChuZ1dpemFyZENvbmZpZzogTmdXaXphcmRDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5nV2l6YXJkTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTmdXaXphcmRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IE5HX1dJWkFSRF9DT05GSUdfVE9LRU4sXHJcbiAgICAgICAgICB1c2VWYWx1ZTogbmdXaXphcmRDb25maWdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==
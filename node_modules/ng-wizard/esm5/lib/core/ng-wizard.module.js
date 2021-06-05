import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_WIZARD_CONFIG_TOKEN } from './ng-wizard-config.token';
import { NgWizardStepComponent } from './wizard-step/ng-wizard-step.component';
import { NgWizardComponent } from './wizard/ng-wizard.component';
import { NgWizardStepContentDirective } from './ng-wizard-step-content.directive';
var NgWizardModule = /** @class */ (function () {
    function NgWizardModule() {
    }
    NgWizardModule_1 = NgWizardModule;
    /**
     * forRoot
     * @returns A module with its provider dependencies
     */
    NgWizardModule.forRoot = function (ngWizardConfig) {
        return {
            ngModule: NgWizardModule_1,
            providers: [
                {
                    provide: NG_WIZARD_CONFIG_TOKEN,
                    useValue: ngWizardConfig
                }
            ]
        };
    };
    var NgWizardModule_1;
    NgWizardModule = NgWizardModule_1 = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [NgWizardComponent, NgWizardStepComponent, NgWizardStepContentDirective],
            exports: [NgWizardComponent, NgWizardStepComponent]
        })
    ], NgWizardModule);
    return NgWizardModule;
}());
export { NgWizardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL25nLXdpemFyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU9sRjtJQUFBO0lBZ0JBLENBQUM7dUJBaEJZLGNBQWM7SUFDekI7OztPQUdHO0lBQ0ksc0JBQU8sR0FBZCxVQUFlLGNBQThCO1FBQzNDLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsRUFBRSxjQUFjO2lCQUN6QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBZlUsY0FBYztRQUwxQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDdkIsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsNEJBQTRCLENBQUM7WUFDdEYsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7U0FDcEQsQ0FBQztPQUNXLGNBQWMsQ0FnQjFCO0lBQUQscUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWhCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE5nV2l6YXJkQ29uZmlnIH0gZnJvbSAnLi4vdXRpbHMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IE5HX1dJWkFSRF9DT05GSUdfVE9LRU4gfSBmcm9tICcuL25nLXdpemFyZC1jb25maWcudG9rZW4nO1xyXG5pbXBvcnQgeyBOZ1dpemFyZFN0ZXBDb21wb25lbnQgfSBmcm9tICcuL3dpemFyZC1zdGVwL25nLXdpemFyZC1zdGVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nV2l6YXJkQ29tcG9uZW50IH0gZnJvbSAnLi93aXphcmQvbmctd2l6YXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nV2l6YXJkU3RlcENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL25nLXdpemFyZC1zdGVwLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmdXaXphcmRDb21wb25lbnQsIE5nV2l6YXJkU3RlcENvbXBvbmVudCwgTmdXaXphcmRTdGVwQ29udGVudERpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW05nV2l6YXJkQ29tcG9uZW50LCBOZ1dpemFyZFN0ZXBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1dpemFyZE1vZHVsZSB7XHJcbiAgLyoqXHJcbiAgICogZm9yUm9vdFxyXG4gICAqIEByZXR1cm5zIEEgbW9kdWxlIHdpdGggaXRzIHByb3ZpZGVyIGRlcGVuZGVuY2llc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBmb3JSb290KG5nV2l6YXJkQ29uZmlnOiBOZ1dpemFyZENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmdXaXphcmRNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ1dpemFyZE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdfV0laQVJEX0NPTkZJR19UT0tFTixcclxuICAgICAgICAgIHVzZVZhbHVlOiBuZ1dpemFyZENvbmZpZ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19
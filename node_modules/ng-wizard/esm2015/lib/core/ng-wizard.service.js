import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { NgWizardDataService } from './ng-wizard-data.service';
import * as i0 from "@angular/core";
import * as i1 from "./ng-wizard-data.service";
let NgWizardService = class NgWizardService {
    constructor(ngWizardDataService) {
        this.ngWizardDataService = ngWizardDataService;
    }
    reset() {
        this.ngWizardDataService.resetWizard();
    }
    next() {
        this.ngWizardDataService.showNextStep();
    }
    previous() {
        this.ngWizardDataService.showPreviousStep();
    }
    show(index) {
        this.ngWizardDataService.showStep(index);
    }
    theme(theme) {
        this.ngWizardDataService.setTheme(theme);
    }
    stepChanged() {
        return this.ngWizardDataService.stepChangedArgs$;
    }
};
NgWizardService.ctorParameters = () => [
    { type: NgWizardDataService }
];
NgWizardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgWizardService_Factory() { return new NgWizardService(i0.ɵɵinject(i1.NgWizardDataService)); }, token: NgWizardService, providedIn: "root" });
NgWizardService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [NgWizardDataService])
], NgWizardService);
export { NgWizardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy13aXphcmQvIiwic291cmNlcyI6WyJsaWIvY29yZS9uZy13aXphcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBUS9ELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsWUFDVSxtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUVsRCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBYTtRQUNoQixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBWTtRQUNoQixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUM7SUFDbkQsQ0FBQztDQUNGLENBQUE7O1lBM0JnQyxtQkFBbUI7OztBQUZ2QyxlQUFlO0lBSDNCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7cUNBRytCLG1CQUFtQjtHQUZ2QyxlQUFlLENBNkIzQjtTQTdCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmdXaXphcmREYXRhU2VydmljZSB9IGZyb20gJy4vbmctd2l6YXJkLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFRIRU1FIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN0ZXBDaGFuZ2VkQXJncyB9IGZyb20gJy4uL3V0aWxzL2ludGVyZmFjZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdXaXphcmRTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdXaXphcmREYXRhU2VydmljZTogTmdXaXphcmREYXRhU2VydmljZVxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLm5nV2l6YXJkRGF0YVNlcnZpY2UucmVzZXRXaXphcmQoKTtcclxuICB9XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICB0aGlzLm5nV2l6YXJkRGF0YVNlcnZpY2Uuc2hvd05leHRTdGVwKCk7XHJcbiAgfVxyXG5cclxuICBwcmV2aW91cygpIHtcclxuICAgIHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zaG93UHJldmlvdXNTdGVwKCk7XHJcbiAgfVxyXG5cclxuICBzaG93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zaG93U3RlcChpbmRleCk7XHJcbiAgfVxyXG5cclxuICB0aGVtZSh0aGVtZTogVEhFTUUpIHtcclxuICAgIHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zZXRUaGVtZSh0aGVtZSk7XHJcbiAgfVxyXG5cclxuICBzdGVwQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPFN0ZXBDaGFuZ2VkQXJncz4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zdGVwQ2hhbmdlZEFyZ3MkO1xyXG4gIH1cclxufVxyXG4iXX0=
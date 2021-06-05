import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { NgWizardDataService } from './ng-wizard-data.service';
import * as i0 from "@angular/core";
import * as i1 from "./ng-wizard-data.service";
var NgWizardService = /** @class */ (function () {
    function NgWizardService(ngWizardDataService) {
        this.ngWizardDataService = ngWizardDataService;
    }
    NgWizardService.prototype.reset = function () {
        this.ngWizardDataService.resetWizard();
    };
    NgWizardService.prototype.next = function () {
        this.ngWizardDataService.showNextStep();
    };
    NgWizardService.prototype.previous = function () {
        this.ngWizardDataService.showPreviousStep();
    };
    NgWizardService.prototype.show = function (index) {
        this.ngWizardDataService.showStep(index);
    };
    NgWizardService.prototype.theme = function (theme) {
        this.ngWizardDataService.setTheme(theme);
    };
    NgWizardService.prototype.stepChanged = function () {
        return this.ngWizardDataService.stepChangedArgs$;
    };
    NgWizardService.ctorParameters = function () { return [
        { type: NgWizardDataService }
    ]; };
    NgWizardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgWizardService_Factory() { return new NgWizardService(i0.ɵɵinject(i1.NgWizardDataService)); }, token: NgWizardService, providedIn: "root" });
    NgWizardService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [NgWizardDataService])
    ], NgWizardService);
    return NgWizardService;
}());
export { NgWizardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy13aXphcmQvIiwic291cmNlcyI6WyJsaWIvY29yZS9uZy13aXphcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBUS9EO0lBQ0UseUJBQ1UsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFFbEQsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsOEJBQUksR0FBSixVQUFLLEtBQWE7UUFDaEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsK0JBQUssR0FBTCxVQUFNLEtBQVk7UUFDaEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7O2dCQTFCOEIsbUJBQW1COzs7SUFGdkMsZUFBZTtRQUgzQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUcrQixtQkFBbUI7T0FGdkMsZUFBZSxDQTZCM0I7MEJBdkNEO0NBdUNDLEFBN0JELElBNkJDO1NBN0JZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOZ1dpemFyZERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9uZy13aXphcmQtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVEhFTUUgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU3RlcENoYW5nZWRBcmdzIH0gZnJvbSAnLi4vdXRpbHMvaW50ZXJmYWNlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1dpemFyZFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuZ1dpemFyZERhdGFTZXJ2aWNlOiBOZ1dpemFyZERhdGFTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMubmdXaXphcmREYXRhU2VydmljZS5yZXNldFdpemFyZCgpO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpIHtcclxuICAgIHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zaG93TmV4dFN0ZXAoKTtcclxuICB9XHJcblxyXG4gIHByZXZpb3VzKCkge1xyXG4gICAgdGhpcy5uZ1dpemFyZERhdGFTZXJ2aWNlLnNob3dQcmV2aW91c1N0ZXAoKTtcclxuICB9XHJcblxyXG4gIHNob3coaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5uZ1dpemFyZERhdGFTZXJ2aWNlLnNob3dTdGVwKGluZGV4KTtcclxuICB9XHJcblxyXG4gIHRoZW1lKHRoZW1lOiBUSEVNRSkge1xyXG4gICAgdGhpcy5uZ1dpemFyZERhdGFTZXJ2aWNlLnNldFRoZW1lKHRoZW1lKTtcclxuICB9XHJcblxyXG4gIHN0ZXBDaGFuZ2VkKCk6IE9ic2VydmFibGU8U3RlcENoYW5nZWRBcmdzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ1dpemFyZERhdGFTZXJ2aWNlLnN0ZXBDaGFuZ2VkQXJncyQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==
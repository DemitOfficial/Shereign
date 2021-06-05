import { ModuleWithProviders } from '@angular/core';
import { NgWizardConfig } from '../utils/interfaces';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './wizard/ng-wizard.component';
import * as ɵngcc2 from './wizard-step/ng-wizard-step.component';
import * as ɵngcc3 from './ng-wizard-step-content.directive';
import * as ɵngcc4 from '@angular/common';
export declare class NgWizardModule {
    /**
     * forRoot
     * @returns A module with its provider dependencies
     */
    static forRoot(ngWizardConfig: NgWizardConfig): ModuleWithProviders<NgWizardModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<NgWizardModule, [typeof ɵngcc1.NgWizardComponent, typeof ɵngcc2.NgWizardStepComponent, typeof ɵngcc3.NgWizardStepContentDirective], [typeof ɵngcc4.CommonModule], [typeof ɵngcc1.NgWizardComponent, typeof ɵngcc2.NgWizardStepComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<NgWizardModule>;
}

//# sourceMappingURL=ng-wizard.module.d.ts.map
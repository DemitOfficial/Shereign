import { ComponentFactoryResolver, OnInit } from '@angular/core';
import { NgWizardStep } from '../../utils/interfaces';
import { NgWizardStepContentDirective } from '../ng-wizard-step-content.directive';
import * as ɵngcc0 from '@angular/core';
export declare class NgWizardStepComponent extends NgWizardStep implements OnInit {
    private componentFactoryResolver;
    stepContent: NgWizardStepContentDirective;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    loadComponent(): void;
    get isHidden(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgWizardStepComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgWizardStepComponent, "ng-wizard-step", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=ng-wizard-step.component.d.ts.map
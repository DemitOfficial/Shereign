import { TOOLBAR_POSITION, TOOLBAR_BUTTON_POSITION, /* TRANSITION_EFFECT,*/ THEME, STEP_STATE, STEP_STATUS, STEP_DIRECTIN, STEP_POSITION } from './enums';
import { Type, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export interface Language {
    next?: string;
    previous?: string;
}
export interface ToolbarSettings {
    toolbarPosition?: TOOLBAR_POSITION;
    toolbarButtonPosition?: TOOLBAR_BUTTON_POSITION;
    showNextButton?: boolean;
    showPreviousButton?: boolean;
    toolbarExtraButtons?: ToolbarButton[];
}
export interface ToolbarButton {
    text: string;
    class: string;
    event?: () => void;
}
export interface AnchorSettings {
    anchorClickable?: boolean;
    enableAllAnchors?: boolean;
    markDoneStep?: boolean;
    markAllPreviousStepsAsDone?: boolean;
    removeDoneStepOnNavigateBack?: boolean;
    enableAnchorOnDoneStep?: boolean;
}
export interface NgWizardConfig {
    selected?: number;
    keyNavigation?: boolean;
    cycleSteps?: boolean;
    lang?: Language;
    toolbarSettings?: ToolbarSettings;
    anchorSettings?: AnchorSettings;
    theme?: THEME;
}
export declare abstract class NgWizardStep {
    index: number;
    title: string;
    description: string;
    state?: STEP_STATE;
    initialState?: STEP_STATE;
    component: Type<any>;
    componentRef: ComponentRef<any>;
    canEnter: boolean | ((args: StepValidationArgs) => boolean) | ((args: StepValidationArgs) => Observable<boolean>);
    canExit: boolean | ((args: StepValidationArgs) => boolean) | ((args: StepValidationArgs) => Observable<boolean>);
    status?: STEP_STATUS;
    initialStatus?: STEP_STATUS;
    get hidden(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgWizardStep, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgWizardStep, never, never, { "title": "title"; "description": "description"; "state": "state"; "component": "component"; "canEnter": "canEnter"; "canExit": "canExit"; }, {}, never>;
}
export interface StepValidationArgs {
    direction: STEP_DIRECTIN;
    fromStep: NgWizardStep;
    toStep: NgWizardStep;
}
export interface StepChangedArgs {
    step: NgWizardStep;
    previousStep: NgWizardStep;
    direction: STEP_DIRECTIN;
    position: STEP_POSITION;
}

//# sourceMappingURL=interfaces.d.ts.map
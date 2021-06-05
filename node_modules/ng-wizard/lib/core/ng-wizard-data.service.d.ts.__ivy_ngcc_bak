import { Observable } from 'rxjs';
import { NgWizardConfig, StepChangedArgs } from '../utils/interfaces';
import { THEME } from '../utils/enums';
export declare class NgWizardDataService {
    private config;
    resetWizard$: Observable<any>;
    showNextStep$: Observable<any>;
    showPreviousStep$: Observable<any>;
    showStep$: Observable<number>;
    setTheme$: Observable<THEME>;
    stepChangedArgs$: Observable<StepChangedArgs>;
    private _resetWizard;
    private _showNextStep;
    private _showPreviousStep;
    private _showStep;
    private _setTheme;
    private _stepChangedArgs;
    private _defaultConfig;
    constructor(config: NgWizardConfig);
    getDefaultConfig(): NgWizardConfig;
    resetWizard(): void;
    showNextStep(): void;
    showPreviousStep(): void;
    showStep(index: number): void;
    setTheme(theme: THEME): void;
    stepChanged(args: StepChangedArgs): void;
}

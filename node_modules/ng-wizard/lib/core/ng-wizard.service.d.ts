import { NgWizardDataService } from './ng-wizard-data.service';
import { THEME } from '../utils/enums';
import { Observable } from 'rxjs';
import { StepChangedArgs } from '../utils/interfaces';
import * as ɵngcc0 from '@angular/core';
export declare class NgWizardService {
    private ngWizardDataService;
    constructor(ngWizardDataService: NgWizardDataService);
    reset(): void;
    next(): void;
    previous(): void;
    show(index: number): void;
    theme(theme: THEME): void;
    stepChanged(): Observable<StepChangedArgs>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgWizardService, never>;
}

//# sourceMappingURL=ng-wizard.service.d.ts.map
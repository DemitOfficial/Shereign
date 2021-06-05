import { NgWizardDataService } from './ng-wizard-data.service';
import { THEME } from '../utils/enums';
import { Observable } from 'rxjs';
import { StepChangedArgs } from '../utils/interfaces';
export declare class NgWizardService {
    private ngWizardDataService;
    constructor(ngWizardDataService: NgWizardDataService);
    reset(): void;
    next(): void;
    previous(): void;
    show(index: number): void;
    theme(theme: THEME): void;
    stepChanged(): Observable<StepChangedArgs>;
}

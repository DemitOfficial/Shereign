import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { NgbCollapseModule, NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './Customer/Customer.component';
import { FormsModule } from '@angular/forms';
import { CustomerModuleRouteRoutes } from './CustomerModuleRoute.routing';
import { CustomerTableService } from './Customer/CustomerTable.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
  CustomerModuleRouteRoutes,
    UIModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbCollapseModule,
    NgbDropdownModule,
    FormsModule,
    NgxSpinnerModule
  ],
  declarations: [CustomerComponent],
  providers: [DecimalPipe,CustomerTableService],
})
export class CustomerModuleModule { }

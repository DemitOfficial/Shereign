import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './Group.component';
import { AllgroupComponent } from './allgroup/allgroup.component';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GroupRouteRoutes } from './GroupRoute.routing';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  GroupRouteRoutes,
    NgbAlertModule,
    ColorPickerModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgbModalModule,
    NgxSpinnerModule
  ],
  declarations: [GroupComponent,AllgroupComponent,CreategroupComponent]
})
export class GroupModule { }

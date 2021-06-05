import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PregnancyDataComponent } from './PregnancyData.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MotherDataComponent } from './MotherData/MotherData.component';
import { CreateMotherDataComponent } from './CreateMotherData/CreateMotherData.component';
import { BabyDataComponent } from './BabyData/BabyData.component';
import { PregnancyrouteRoutes } from './Pregnancyroute.routing';
import { CreateBabyDataComponent } from './CreateBabyData/CreateBabyData.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PregnancyrouteRoutes,
    NgbAlertModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgbModalModule,
    NgxSpinnerModule
  ],
  declarations: [PregnancyDataComponent,MotherDataComponent,CreateMotherDataComponent,BabyDataComponent,CreateBabyDataComponent]
})
export class PregnancyDataModule { }

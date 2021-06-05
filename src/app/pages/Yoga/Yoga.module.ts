import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YogaComponent } from './Yoga.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YogaRoutes } from './Yoga.routing';
import { NgbAlertModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CreatevideoComponent } from './createvideo/createvideo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  YogaRoutes,
    NgbAlertModule,
  
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgbModalModule,
    NgxSpinnerModule
  ],
  declarations: [YogaComponent,CreatevideoComponent]
})
export class YogaModule { }

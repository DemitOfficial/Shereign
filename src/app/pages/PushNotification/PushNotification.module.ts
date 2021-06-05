import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushNotificationComponent } from './PushNotification.component';
import { NotificationRouteRoutes } from './NotificationRoute.routing';
import { CreateNotificationComponent } from './CreateNotification/CreateNotification.component';
import { FormModule } from '../form/form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    NotificationRouteRoutes,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
  
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgbModalModule,
    NgxSpinnerModule

  ],
  declarations: [PushNotificationComponent,CreateNotificationComponent]
})
export class PushNotificationModule { }

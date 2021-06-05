import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserComponent } from './AdminUser.component';
import { AdminUserRoutes } from './AdminUser.routing';
import { CreateUserComponent } from './CreateUser/CreateUser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AllUserComponent } from './All-User/All-User.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    AdminUserRoutes,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgbModalModule,
    NgxSpinnerModule
  ],
  declarations: [
    AdminUserComponent, 
    CreateUserComponent,
    AllUserComponent]
})
export class AdminUserModule { }

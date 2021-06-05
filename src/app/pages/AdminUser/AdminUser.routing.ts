import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUserComponent } from './All-User/All-User.component';
import { CreateUserComponent } from './CreateUser/CreateUser.component';


const routes: Routes = [
  {
      path: 'create-user',
      component: CreateUserComponent
  },
  {
    path: 'all-user',
    component: AllUserComponent
},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUserRoutes {}



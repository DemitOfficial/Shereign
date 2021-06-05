import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './Customer/Customer.component';

const routes: Routes = [
  {
      path: '',
      component: CustomerComponent
  },
  {
    path: 'customers',
    component: CustomerComponent
}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerModuleRouteRoutes {}

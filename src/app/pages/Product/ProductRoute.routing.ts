import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllproductsComponent } from './Allproducts/Allproducts.component';
import { CreateProductComponent } from './Create-Product/Create-Product.component';
const routes: Routes = [
  {
      path: 'create-product',
      component: CreateProductComponent
  },
  {
    path: 'all-product',
    component: AllproductsComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRouteRoutes {}


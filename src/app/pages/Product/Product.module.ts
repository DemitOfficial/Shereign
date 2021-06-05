import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ProductComponent } from './Product.component';
import { ProductRouteRoutes } from './ProductRoute.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllproductsComponent } from './Allproducts/Allproducts.component';
import { CreateProductComponent } from './Create-Product/Create-Product.component';
import { NgbCollapseModule, NgbDropdownModule, NgbModal, NgbModalModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
};
@NgModule({
  imports: [
    CommonModule,
 ProductRouteRoutes,
 FormsModule,
 ReactiveFormsModule,
 NgbPaginationModule,
 NgbTypeaheadModule,
 NgbCollapseModule,
 NgbDropdownModule,
 DropzoneModule,
 NgxPaginationModule,
Ng2OrderModule,
Ng2SearchPipeModule,
NgbModalModule,
NgxSpinnerModule
  ],
  declarations: [ProductComponent,AllproductsComponent,CreateProductComponent],
  providers: [DecimalPipe, {
    provide: DROPZONE_CONFIG,
    useValue: DEFAULT_DROPZONE_CONFIG
  }],
})
export class ProductModule { }

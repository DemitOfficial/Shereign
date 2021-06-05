import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './Articles.component';
import { AllArticleComponent } from './AllArticle/AllArticle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CreateArticleComponent } from './CreateArticle/CreateArticle.component';
import { ArticleroutesRoutes } from './Articleroutes.routing';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   ArticleroutesRoutes,
    NgbAlertModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgbModalModule,
    NgxSpinnerModule
  ],
  declarations: [ArticlesComponent,AllArticleComponent,CreateArticleComponent]
})
export class ArticlesModule { }

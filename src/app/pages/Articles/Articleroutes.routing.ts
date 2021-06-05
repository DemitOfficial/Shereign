import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllArticleComponent } from './AllArticle/AllArticle.component';

const routes: Routes = [
  {
      path: 'all-articles',
      component: AllArticleComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleroutesRoutes {}



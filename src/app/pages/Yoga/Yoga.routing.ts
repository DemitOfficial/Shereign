import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatevideoComponent } from './createvideo/createvideo.component';
import { YogaComponent } from './Yoga.component';

const routes: Routes = [
  {
      path: 'create-yogavideo',
      component: CreatevideoComponent
  },
  {
    path: '',
    component: YogaComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YogaRoutes {}



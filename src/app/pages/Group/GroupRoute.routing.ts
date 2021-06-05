import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllgroupComponent } from './allgroup/allgroup.component';

const routes: Routes = [
  {
      path: 'all-groups',
      component: AllgroupComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRouteRoutes {}



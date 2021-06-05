import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BabyDataComponent } from './BabyData/BabyData.component';
import { MotherDataComponent } from './MotherData/MotherData.component';

const routes: Routes = [
  {
      path: 'mother-week-data',
      component: MotherDataComponent
  },
  {
    path: 'baby-week-data',
    component: BabyDataComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PregnancyrouteRoutes {}


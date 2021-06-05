import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNotificationComponent } from './CreateNotification/CreateNotification.component';

const routes: Routes = [
  {
      path: 'send-notification',
      component: CreateNotificationComponent
  },
  {
    path: '',
    component: CreateNotificationComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRouteRoutes {}



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './dashboards/default/default.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { CustomerComponent } from './CustomerModule/Customer/Customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer' },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'notification', loadChildren: () => import('./PushNotification/PushNotification.module').then(m => m.PushNotificationModule) },
  { path: 'yoga', loadChildren: () => import('./Yoga/Yoga.module').then(m=>m.YogaModule)},
  { path: 'group', loadChildren: () => import('./Group/Group.module').then(m => m.GroupModule) }, 
  { path: 'article', loadChildren: () => import('./Articles/Articles.module').then(m => m.ArticlesModule) }, 
  { path: 'product', loadChildren: () => import('./Product/Product.module').then(m => m.ProductModule) }, 
  { path: 'pregnancy', loadChildren: () => import('./PregnancyData/PregnancyData.module').then(m => m.PregnancyDataModule) }, 
  { path: 'admin', loadChildren: () => import('./AdminUser/AdminUser.module').then(m => m.AdminUserModule) }, 
  { path: 'customer', loadChildren: () => import('./CustomerModule/CustomerModule.module').then(m => m.CustomerModuleModule) },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
  { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },  
  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },  
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

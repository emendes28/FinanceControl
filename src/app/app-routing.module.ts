import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
//import { HistoryComponent } from './history/history.component';
//import { ReportsComponent } from './reports/reports.component';

export const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  }
];
/*,
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  }*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

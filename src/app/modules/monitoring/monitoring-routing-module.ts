import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoringDashboard } from './pages/monitoring-dashboard/monitoring-dashboard';

const routes: Routes = [{ path: '', component: MonitoringDashboard }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoringRoutingModule {}

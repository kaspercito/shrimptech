import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoringRoutingModule } from './monitoring-routing-module';
import { MonitoringDashboard } from './pages/monitoring-dashboard/monitoring-dashboard';
import { WaterParameters } from './components/water-parameters/water-parameters';
import { AlertsPanel } from './components/alerts-panel/alerts-panel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MonitoringRoutingModule,
    MonitoringDashboard,
    WaterParameters,
    AlertsPanel,
  ],
})
export class MonitoringModule {}

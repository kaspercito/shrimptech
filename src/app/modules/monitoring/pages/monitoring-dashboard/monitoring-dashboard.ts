import { Component } from '@angular/core';
import { WaterParameters } from '../../components/water-parameters/water-parameters';
import { AlertsPanel } from '../../components/alerts-panel/alerts-panel';

@Component({
  selector: 'app-monitoring-dashboard',
  imports: [WaterParameters, AlertsPanel],
  templateUrl: './monitoring-dashboard.html',
  styleUrl: './monitoring-dashboard.css',
})
export class MonitoringDashboard {}

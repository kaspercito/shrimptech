import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-production-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './production-dashboard.html',
  styleUrls: ['./production-dashboard.css']
})
export class ProductionDashboardComponent {

  lotes = [
    { nombre: 'Lote 1', cantidad: 5000 },
    { nombre: 'Lote 2', cantidad: 4500 }
  ];

  muestreos = [
    { fecha: '2025-11-10', peso: 8.5, individuos: 150, mortalidad: '2%' },
    { fecha: '2025-11-15', peso: 9.0, individuos: 148, mortalidad: '3%' }
  ];

  cosechas = [
    { fecha: '2025-11-01', lote: 'Lote 1', cantidadKg: 120 },
    { fecha: '2025-11-08', lote: 'Lote 2', cantidadKg: 95 }
  ];

}

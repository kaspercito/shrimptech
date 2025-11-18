import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cosecha',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cosecha.html',
  styleUrls: ['./cosecha.css']
})
export class CosechaComponent {

  // Datos temporales de ejemplo
  cosechas = [
    { fecha: '2025-11-01', lote: 'Lote 1', cantidadKg: 120, observaciones: 'Buena calidad' },
    { fecha: '2025-11-08', lote: 'Lote 2', cantidadKg: 95, observaciones: 'Algunos descartes' },
  ];

}

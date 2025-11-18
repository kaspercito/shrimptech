import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lote-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lote-list.html',
  styleUrls: ['./lote-list.css']
})
export class LoteListComponent {

  // Datos de prueba (luego conectaremos a un servicio)
  lotes = [
    {
      codigo: "L-001",
      fecha: "2025-10-05",
      especie: "P. vannamei",
      cantidad: 50000,
      estanque: "E-01",
      estado: "Activo"
    },
    {
      codigo: "L-002",
      fecha: "2025-09-12",
      especie: "P. vannamei",
      cantidad: 45000,
      estanque: "E-03",
      estado: "En cosecha"
    }
  ];

}

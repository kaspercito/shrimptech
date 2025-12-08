import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatChipsModule
  ],
  templateUrl: './alerts.html',
  styleUrls: ['./alerts.css'],
})
export class Alerts {

  //DATOS
  productos = [
    { nombre: 'Producto 1', stockActual: 5000, stockMinimo: 9000 },
    { nombre: 'Producto 2', stockActual: 4200, stockMinimo: 4500 },
    { nombre: 'Producto 3', stockActual: 3800, stockMinimo: 3000 },
    { nombre: 'Producto 4', stockActual: 6400, stockMinimo: 6500 },
    { nombre: 'Producto 5', stockActual: 1000, stockMinimo: 6000 }
  ];

getEstado(producto: any) {
  const actual = producto.stockActual;
  const minimo = producto.stockMinimo;

  //CORRECTO: stock >= mínimo
  if (actual >= minimo) return 'correcto';

  //CERCA DEL MINIMO: stock >= 80% del mínimo
  if (actual >= minimo * 0.8) return 'cerca';

  //BAJO STOCK
  return 'bajo';
}

  //TEXTO DEL CHIP
  getEstadoTexto(estado: string) {
    return estado === 'bajo'
      ? 'Bajo stock'
      : estado === 'cerca'
      ? 'Cerca del mínimo'
      : 'Correcto';
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-muestreos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './muestreos.html',
  styleUrls: ['./muestreos.css']
})
export class MuestreosComponent {

  // Datos temporales
  muestreos = [
    { fecha: "2025-10-10", peso: 8.5, individuos: 150, mortalidad: "2%" },
    { fecha: "2025-10-15", peso: 9.1, individuos: 148, mortalidad: "3%" },
    { fecha: "2025-10-20", peso: 10.0, individuos: 147, mortalidad: "1%" },
  ];

}

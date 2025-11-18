import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.css']
})
export class EventosComponent {

  // Datos temporales 
  eventos = [
    { fecha: "2025-10-10", tipo: "Alimentación", nota: "Ración normal AM" },
    { fecha: "2025-10-12", tipo: "Tratamiento", nota: "Aplicado probiótico" },
    { fecha: "2025-10-15", tipo: "Incidencia", nota: "Mortalidad un poco elevada" }
  ];

}

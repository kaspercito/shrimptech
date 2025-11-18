import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-muestreo-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './muestreo-form.html',
  styleUrls: ['./muestreo-form.css']
})
export class MuestreoFormComponent  {

  muestreo = {
    fecha: '',
    peso: null,
    individuos: null,
    mortalidad: null,
    observaciones: ''
  };

  constructor(private router: Router) {}

  guardar() {
    console.log('Muestreo guardado:', this.muestreo);
    alert('¡Muestreo guardado con éxito!');
    // Aquí luego conectaremos a LocalStorage o backend
    this.router.navigate(['/production/muestreos']);
  }
}

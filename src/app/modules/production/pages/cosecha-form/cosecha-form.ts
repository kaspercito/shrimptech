import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cosecha-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cosecha-form.html',
  styleUrls: ['./cosecha-form.css']
})
export class CosechaFormComponent {

  cosecha = {
    fecha: '',
    lote: '',
    cantidadKg: null,
    observaciones: ''
  };

  constructor(private router: Router) {}

  guardar() {
    console.log('Cosecha guardada:', this.cosecha);
    alert('¡Cosecha guardada con éxito!');
    this.router.navigate(['/production/cosecha']);
  }
}

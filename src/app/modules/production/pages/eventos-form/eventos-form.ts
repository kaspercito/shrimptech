import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-eventos-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './eventos-form.html',
  styleUrls: ['./eventos-form.css']
})
export class EventosFormComponent {

  evento = {
    fecha: '',
    tipo: '',
    nota: ''
  };

  constructor(private router: Router) {}

  guardar() {

    console.log('Evento guardado:', this.evento);
    alert('¡Evento guardado!');
    this.router.navigate(['/production/eventos']);
  }
}

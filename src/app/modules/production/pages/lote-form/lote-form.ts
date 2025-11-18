import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lote-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './lote-form.html',
  styleUrls: ['./lote-form.css']
})
export class LoteFormComponent {

  form: FormGroup;

  estados = ["Activo", "En cosecha", "Cerrado"];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      codigo: ['', Validators.required],
      fecha: ['', Validators.required],
      especie: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      estanque: ['', Validators.required],
      estado: ['Activo', Validators.required],
    });
  }

  guardar() {
    if (this.form.invalid) {
      alert("Completa todos los campos correctamente.");
      return;
    }

    console.log("Datos del lote:", this.form.value);
    alert("Lote registrado correctamente (ejemplo demo)");

  }

}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
//DATEPICKER
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-add-movements',
  templateUrl: './add-movements.html',
  styleUrls: ['./add-movements.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,  
    MatNativeDateModule   
  ],
  providers: [provideNativeDateAdapter()]
})
export class AddMovements {
  movimiento: any = {
    tipo: '',
    producto: '',
    cantidad: 0,
    fecha: '',
    responsable: ''
  };

  constructor(
    public dialogRef: MatDialogRef<AddMovements>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  guardar() {
    this.dialogRef.close(this.movimiento);
  }

  cancelar() {
    this.dialogRef.close(null);
  }
}

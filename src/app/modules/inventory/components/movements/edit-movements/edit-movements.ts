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
  selector: 'edit-movements',
  standalone: true,
  templateUrl: './edit-movements.html',
  styleUrls: ['./edit-movements.css'],
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
export class EditMovements {

  movimiento: any;

  constructor(
    public dialogRef: MatDialogRef<EditMovements>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.movimiento = { ...data.movimiento };
  }

  //GUARDAR
  guardar() {
    this.dialogRef.close(this.movimiento);
  }

  //CANCELAR
  cancelar() {
    this.dialogRef.close(null);
  }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-view-movements',
  templateUrl: './view-movements.html',
  styleUrls: ['./view-movements.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ViewMovements {

  movimiento: any;

  constructor(
    public dialogRef: MatDialogRef<ViewMovements>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.movimiento = { ...data.movimiento };
  }

  //CERRAR
  cerrar() {
    this.dialogRef.close();
  }
}

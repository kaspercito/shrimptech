import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'edit-product',
  standalone: true,
  templateUrl: './edit-product.html',
  styleUrls: ['./edit-product.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class EditProduct {

  producto: any;

  constructor(
    public dialogRef: MatDialogRef<EditProduct>,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) {
    this.producto = { ...data.producto };
  }

  //GUARDAR 
  guardar() {
    this.dialogRef.close(this.producto);
  }

  //CANCELAR
  cancelar() {
    this.dialogRef.close(null);
  }
}

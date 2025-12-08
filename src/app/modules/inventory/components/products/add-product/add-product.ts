import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css'],
  standalone: true,
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
export class AddProduct {

  //DATOS
  producto: any = {
    lote: '',
    tipo: '',
    estanque: '',
    stock: 0,
    peso: 0
  };

  constructor(
    public dialogRef: MatDialogRef<AddProduct>,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) {}

  //GUARDAR 
  guardar() {
    this.dialogRef.close(this.producto);
  }

  //CANCELAR 
  cancelar() {
    this.dialogRef.close(null);
  }
}

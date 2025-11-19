import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing-module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, InventoryRoutingModule, RouterModule],
})
export class InventoryModule {}

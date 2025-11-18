import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.ProductionHomeComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/production-dashboard/production-dashboard')
        .then(m => m.ProductionDashboardComponent)
  },
  {
    path: 'lotes',
    loadComponent: () =>
      import('./pages/lote-list/lote-list')
        .then(m => m.LoteListComponent)
  },
  {
    path: 'lotes/nuevo',
    loadComponent: () =>
      import('./pages/lote-form/lote-form')
        .then(m => m.LoteFormComponent)
  },
  {
    path: 'eventos',
    loadComponent: () =>
      import('./pages/eventos/eventos')
        .then(m => m.EventosComponent)
  },
  {
  path: 'eventos/nuevo',
  loadComponent: () =>
    import('./pages/eventos-form/eventos-form')
      .then(m => m.EventosFormComponent)
},
  {
    path: 'muestreos',
    loadComponent: () =>
      import('./pages/muestreos/muestreos')
        .then(m => m.MuestreosComponent)
  },
  {
  path: 'muestreos/nuevo',
  loadComponent: () =>
    import('./pages/muestreo-form/muestreo-form')
      .then(m => m.MuestreoFormComponent)
},
{
  path: 'cosecha',
  loadComponent: () =>
    import('./pages/cosecha/cosecha')
      .then(m => m.CosechaComponent)
},
{
  path: 'cosecha/nuevo',
  loadComponent: () =>
    import('./pages/cosecha-form/cosecha-form')
      .then(m => m.CosechaFormComponent)
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionRoutingModule {}

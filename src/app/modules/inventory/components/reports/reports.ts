import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
//CHART
import { Chart, registerables } from 'chart.js';
// @ts-ignore
import pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore
import pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = (pdfFonts as any).vfs;
//ELEMENTOS DE CHART.JS
Chart.register(...registerables);

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.html',
  styleUrls: ['./reports.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule
  ]
})
export class Reports implements AfterViewInit, OnDestroy {
  
  //FILTROS
  filtro = {
    producto: '',
    lote: '',
    tipo: '',
    desde: null as Date | null,
    hasta: null as Date | null
  };

  displayedColumns: string[] = ['fecha', 'producto', 'tipo', 'cantidad'];

  //DATOS
  datosOriginales = [
    { fecha: '2025-11-01', producto: 'Producto 1', tipo: 'Entrada', cantidad: 500, lote: 'Lote 001' },
    { fecha: '2025-11-02', producto: 'Producto 2', tipo: 'Salida', cantidad: 200, lote: 'Lote 002' },
    { fecha: '2025-11-03', producto: 'Producto 1', tipo: 'Salida', cantidad: 300, lote: 'Lote 001' },
    { fecha: '2025-11-07', producto: 'Producto 3', tipo: 'Ajuste', cantidad: 100, lote: 'Lote 003' },
    { fecha: '2025-11-10', producto: 'Producto 2', tipo: 'Salida', cantidad: 150, lote: 'Lote 002' },
    { fecha: '2025-11-19', producto: 'Producto 4', tipo: 'Ajuste', cantidad: 250, lote: 'Lote 004' }
  ];

  dataFiltrada = [...this.datosOriginales];

  //GRAFICA CHART
  chart: Chart | undefined;

  //INICIALIZAR GRAFICA
  ngAfterViewInit() {
    this.crearGrafica();
  }

  //EVITAR FUGAS DE MEMORIA
  ngOnDestroy() {
    this.chart?.destroy();
  }

  //FILTRAR
  generarReporte() {
    this.dataFiltrada = this.datosOriginales.filter(item => {
      const fDesde = this.filtro.desde ? new Date(this.filtro.desde) : null;
      const fHasta = this.filtro.hasta ? new Date(this.filtro.hasta) : null;
      const fItem = new Date(item.fecha);
      return (
        (this.filtro.producto === '' || item.producto === this.filtro.producto) &&
        (this.filtro.lote === '' || item.lote === this.filtro.lote) &&
        (this.filtro.tipo === '' || item.tipo === this.filtro.tipo) &&
        (!fDesde || fItem >= fDesde) &&
        (!fHasta || fItem <= fHasta)
      );
    });
    this.actualizarGrafica();
  }

  //LIMPIAR FILTROS
  limpiarFiltros() {
    this.filtro = { producto: '', lote: '', tipo: '', desde: null, hasta: null };
    this.dataFiltrada = [...this.datosOriginales];
    this.actualizarGrafica();
  }

  //EXPORTAR PDF
  exportarPDF() {
  const canvas: any = document.getElementById('myChart');
  const chartImage = canvas.toDataURL('image/png');

  //STYLE DEL PDF
  const dd = {
    content: [
      { text: 'ShrimpTech', style: 'title' },
      { text: 'Reporte de Movimientos', style: 'subtitle' },
      { text: 'Resultados de Movimientos por Producto', style: 'subtitle2', margin: [0, 0, 0, 20] },

      {
        image: chartImage,
        width: 450,
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },

      {
        table: {
          headerRows: 1,
          widths: ['auto', '*', 'auto', 'auto'],
          body: [
            [
              { text: 'Fecha', style: 'tableHeader' },
              { text: 'Producto', style: 'tableHeader' },
              { text: 'Tipo', style: 'tableHeader' },
              { text: 'Cantidad', style: 'tableHeader' }
            ],
            ...this.dataFiltrada.map(item => [
              { text: item.fecha, alignment: 'center' },
              { text: item.producto, alignment: 'center' },
              { text: item.tipo, alignment: 'center' },
              { text: item.cantidad.toString(), alignment: 'center' }
            ])
          ]
        },
        layout: 'lightHorizontalLines'
      }
    ],

    footer: function(currentPage: number, pageCount: number) {
      return { text: `Página ${currentPage} de ${pageCount}`, alignment: 'center', fontSize: 9, margin: [0, 10, 0, 0] };
    },

    styles: {
      title: {
        fontSize: 24,
        bold: true,
        color: '#0097a7',
        alignment: 'center',
        margin: [0, 0, 0, 5]
      },
      subtitle: {
        fontSize: 18,
        bold: true,
        color: '#0097a7',
        alignment: 'center',
        margin: [0, 0, 0, 3]
      },
      subtitle2: {
        fontSize: 14,
        italics: true,
        alignment: 'center',
        color: '#555555'
      },
      tableHeader: {
        bold: true,
        fillColor: '#0097a7',
        color: 'white',
        alignment: 'center'
      }
    },

    defaultStyle: {
      fontSize: 12
    }
  };

  (pdfMake as any).createPdf(dd).download('reporte_shrimptech.pdf');
}

  //CREAR GRAFICA
  private crearGrafica() {
    const etiquetas = [...new Set(this.dataFiltrada.map(x => x.producto))];
    const cantidades = etiquetas.map(p =>
      this.dataFiltrada
        .filter(x => x.producto === p)
        .reduce((sum, v) => sum + v.cantidad, 0)
    );

    const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: etiquetas,
        datasets: [
          {
            label: 'Consumo',
            data: cantidades,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  //ACTUALIZA GRAFICA
  private actualizarGrafica() {
    if (!this.chart) {
      this.crearGrafica();
      return;
    }

    const etiquetas = [...new Set(this.dataFiltrada.map(x => x.producto))];
    const cantidades = etiquetas.map(p =>
      this.dataFiltrada
        .filter(x => x.producto === p)
        .reduce((sum, v) => sum + v.cantidad, 0)
    );

    this.chart.data.labels = etiquetas;
    this.chart.data.datasets[0].data = cantidades;
    this.chart.update();
  }
}

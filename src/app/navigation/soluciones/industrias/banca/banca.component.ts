import { Component, OnInit } from '@angular/core';
import { SolucionesModalComponent } from '../../soluciones-modal/soluciones-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-banca',
  templateUrl: './banca.component.html',
  styleUrls: ['./banca.component.scss']
})
export class BancaComponent implements OnInit {

  dataCardsBanca: any[] = [
    {
      name: 'Gestión de compras',
      problems: [
        'Falta de controles y alertas.',
        'Excesivos tiempos de respuesta.',
        'Falta de información para la toma de desiciones.'
      ],
      benefits: [
        'Reducción de hasta un 25% en tiempo de procesamiento.',
        'Aumento de un 30% en productividad.',
        'Mayor capacidad de monitoreo, validación y seguimiento.'
      ],
    },
    {
      name: 'Comercio exterior',
      problems: [
        'Falta de controles y alertas.',
        'Excesivos tiempos de respuesta.',
        'Falta de espacio físico para el almacenamiento documental.'
      ],
      benefits: [
        'Reducción de hasta un 25% en tiempos de procesamiento.',
        'Alertas electrónicas a clientes.',
        'Reducicción en costos de almacenamiento de archivos.'
      ],
    },
    {
      name: 'Oficios judiciales',
      problems: [
        'Falta de controles y alertas.',
        'Excesivos tiempos de respuesta.',
        'Falta de espacio físico para el almacenamiento documental.'
      ],
      benefits: [
        'Reducción de hasta un 25% en tiempos de procesamiento',
        'Alertas electrónicas a clientes',
        'Reducicción en costos de almacenamiento de archivos.'
      ],
    },
  ];

  constructor(private dialog: MatDialog) {}

  openSolutionsModal(value): void {
    const dialogRef = this.dialog.open(SolucionesModalComponent, {
      height: '380px',
      width: '550px',
      data: this.dataCardsBanca[value]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SolucionesModalComponent } from '../soluciones-modal/soluciones-modal.component';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.scss']
})
export class SaludComponent implements OnInit {

  dataCardsSalud: any[] = [
    {
      name: 'Mesa de entrada',
      problems: [
        'Falta de controles y alertas.',
        'Excesivos tiempos de respuesta.',
        'Falta de espacio físico para el almacenamiento documental.'
      ],
      benefits: [
        'Captura de información y extracción de datos',
        'Aumento de un 30% en productividad.',
        'Mayor capacidad de monitoreo, validación y seguimiento.'
      ],
    },
    {
      name: 'Reintegros',
      problems: [
        'Falta de controles y alertas.',
        'Excesivos tiempos de respuesta.',
        'Atraso en los reintegros hacia los clientes.'
      ],
      benefits: [
        'Terminales de autogestión.',
        'Repositorio digital centralizado.',
        'Reducicción en costos de almacenamiento de archivos.'
      ],
    },
    {
      name: 'Reclamos',
      problems: [
        'Falta de controles y alertas.',
        'Excesivos tiempos de respuesta.',
        'Falta de espacio físico para el almacenamiento documental.'
      ],
      benefits: [
        'Único repositorio.',
        'Respuestas instantáneas.',
        'Alertas electrónicas a clientes.',
      ],
    },
  ];

  constructor(private dialog: MatDialog) {}


  ngOnInit() {
  }

  openSolutionsModal(value): void {
    const dialogRef = this.dialog.open(SolucionesModalComponent, {
      height: '380px',
      width: '550px',
      data: this.dataCardsSalud[value]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SolucionesModalComponent } from '../../soluciones-modal/soluciones-modal.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  dataCardsEducacion: any[] = [
    {
      name: 'Pasantías',
      problems: [
        'Falta de controles y alertas.',
        'Excesivos tiempos de procesamiento.',
        'Excesivos tiempos de respuesta.'
      ],
      benefits: [
        'Documentación 100% digital.',
        'Notificaciones y alertas por correo.',
        'Mayor capacidad de monitoreo, validación y seguimiento.'
      ],
    },
    {
      name: 'Reclutamiento de alumnos',
      problems: [
        'Compleja búsqueda de legajos.',
        'Pérdida de documentación.',
        'Falta de espacio físico para el almacenamiento documental.'
      ],
      benefits: [
        'Documentación 100% digital.',
        'Búsqueda de información mediante campos índices.',
        'Reducicción en costos de almacenamiento de archivos.'
      ],
    },
    {
      name: 'Admisiones',
      problems: [
        'Falta de controles y alertas.',
        'Excesivos tiempos de procesamiento.',
        'Falta de espacio físico para el almacenamiento documental.'
      ],
      benefits: [
        'Reducción de hasta un 25% en tiempos de procesamiento.',
        'Notificaciones y alertas por correo.',
        'Repositorio centralizado.'
      ],
    },
  ];

  constructor(private dialog: MatDialog) {}

  openSolutionsModal(value): void {
    const dialogRef = this.dialog.open(SolucionesModalComponent, {
      height: '380px',
      width: '550px',
      data: this.dataCardsEducacion[value]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}

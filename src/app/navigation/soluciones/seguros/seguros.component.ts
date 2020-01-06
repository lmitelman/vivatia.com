import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SolucionesModalComponent } from '../soluciones-modal/soluciones-modal.component';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.scss']
})
export class SegurosComponent implements OnInit {

  dataCardsSeguros: any[] = [
    {
      name: 'Pólizas',
      problems: [
        'Falta de seguimiento de pólizas generadas.',
        'Falta de alertas frente a pagos y deudas .',
        'Falta de información para la toma de desiciones.'
      ],
      benefits: [
        'Reducción de hasta un 25% en tiempo de procesamiento.',
        'Aumento de un 30% en productividad.',
        'Mayor capacidad de monitoreo, validación y seguimiento.'
      ],
    },
    {
      name: 'Siniestros',
      problems: [
        'Falta de controles y alertas.',
        'Siniestros documentados fuera de plazo estipulado.',
        'Excesivos tiempos de respuesta.'
      ],
      benefits: [
        'Alta de siniestros en el momento de manera digital.',
        'Alertas electrónicas a clientes',
        'Reducicción en costos de almacenamiento de archivos.'
      ],
    },
    {
      name: 'Auditorías',
      problems: [
        'Falta de controles y alertas.',
        'Excesivos tiempos de aprobación de documentos.',
        'Descentralización de documentación.'
      ],
      benefits: [
        'Versionado de documentos.',
        'Alertas electrónicas a clientes',
        'Reducicción en costos de operativos.'
      ],
    },
    {
      name: 'Préstamos',
      problems: [
        'Falta de controles y alertas.',
        'Excesivos tiempos de aprobación de documentos.',
        'Falta de espacio físico para el almacenamiento documental.'
      ],
      benefits: [
        'Reducción de hasta un 25% en tiempos de procesamiento',
        'Alertas electrónicas a clientes',
        'Extracción automática de datos.'
      ],
    },
  ];

  constructor(private dialog: MatDialog) { }

  openSolutionsModal(value): void {
    const dialogRef = this.dialog.open(SolucionesModalComponent, {
      height: '380px',
      width: '550px',
      data: this.dataCardsSeguros[value]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}

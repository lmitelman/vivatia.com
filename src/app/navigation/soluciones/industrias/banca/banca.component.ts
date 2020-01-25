import { Component, OnInit } from '@angular/core';
import { SolucionesModalComponent } from '../../soluciones-modal/soluciones-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-banca',
  templateUrl: './banca.component.html',
  styleUrls: ['./banca.component.scss']
})
export class BancaComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  dataCardsBanca: any[] = [
    {
      name: 'Gestión de solicitudes de aperturas y mantenimiento de cuentas',
      icon: 'none'
    },
    {
      name: 'Solicitudes de créditos personales, hipotecarios y/o prendarios',
      icon: 'none'
    },
  ];

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

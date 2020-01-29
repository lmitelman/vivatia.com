import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SolucionesModalComponent } from '../../soluciones-modal/soluciones-modal.component';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.scss']
})
export class SegurosComponent implements OnInit {

  dataCardsSeguros: any[] = [
    {
      name: 'Denuncias de <br> siniestros',
      icon: 'assets/denuncias.png'
    },
    {
      name: 'Solicitudes <br> de seguros',
      icon: 'assets/solicitudes-de-seguros.png'
    },
    {
      name: 'Presupuestos <br> y talleres',
      icon: 'assets/solicitudes-de-apertura.png'
    },
    {
      name: 'Gestión <br> de flotas',
      icon: 'assets/gestion-de-flotas.png'
    },
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';

@Component({
  selector: 'app-soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.scss']
})
export class SolucionesComponent implements OnInit {

  dataCards: any[] = [
    {
        name: 'Financiera',
        image: 'assets/icon-banca.png',
        path: '/banca'
    },
    {
        name: 'Seguros',
        image: 'assets/icon-seguros.png',
        path: '/nopath'
    },
    {
        name: 'Salud',
        image: 'assets/icon-salud.png',
        path: '/nopath'
    },
    {
        name: 'Manufactura',
        image: 'assets/icon-industria.png',
        path: '/nopath'
    },
    {
        name: 'Retail',
        image: 'assets/icon-retail.png',
        path: '/nopath'
    },
    {
      name: 'Gobierno',
      image: 'assets/icon-gobierno.png',
      path: '/nopath'
    },
    {
      name: 'Educacion',
      image: 'assets/icon-educacion.png',
      path: '/nopath'
    },
    {
      name: 'Servicios',
      image: 'assets/icon-servicios.png',
      path: '/nopath'
    },
    {
      name: 'IT',
      image: 'assets/icon-it.png',
      path: '/nopath'
    }
  ];

  constructor(
    private dialog: MatDialog,
  ) { }

  solutions: string[] = ['Banca', 'Seguros', 'Salud', 'Industria', 'Gobierno']

  ngOnInit() {
    
  }

  openDialog() {
    this.dialog.open(DialogContactComponent);
  }
}

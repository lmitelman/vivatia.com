import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogSolutionsComponent } from 'src/app/navigation/soluciones/dialog-solutions/dialog-solutions.component';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';

@Component({
  selector: 'app-soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.scss']
})
export class SolucionesComponent implements OnInit {

  dataCards: any[] = [
    {
        name: 'Banca',
        image: 'assets/icon-banca.png',
        path: '/banca'
    },
    {
        name: 'Seguros',
        image: 'assets/icon-seguros.png',
        path: '/cuentas-a-pagar'
    },
    {
        name: 'Salud',
        image: 'assets/icon-salud.png',
        path: '/legajos-digitales'
    },
    {
        name: 'Industria',
        image: 'assets/icon-industria.png',
        path: '/contratos'
    },
    {
        name: 'Retail',
        image: 'assets/icon-retail.png',
        path: '/onboarding'
    },
    {
      name: 'Gobierno',
      image: 'assets/icon-gobierno.png',
      path: '/compras'
    },
    {
      name: 'Educacion',
      image: 'assets/icon-educacion.png',
      path: '/compras'
    },
    {
      name: 'Servicios',
      image: 'assets/icon-servicios.png',
      path: '/compras'
    },
    {
      name: 'IT',
      image: 'assets/icon-it.png',
      path: '/compras'
    }
  ];

  constructor(
    private dialog: MatDialog,
  ) { }

  solutions: string[] = ['Banca', 'Seguros', 'Salud', 'Industria', 'Gobierno']

  ngOnInit() {
    
  }

  openDialogSolutions(data) {
    this.dialog.open(DialogSolutionsComponent, {
      data
    });
  }

  openDialog() {
    this.dialog.open(DialogContactComponent);
  }
}

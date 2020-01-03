import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';
import { SolucionesModalComponent } from '../soluciones-modal/soluciones-modal.component';

@Component({
  selector: 'app-soluciones-horizontales',
  templateUrl: './soluciones-horizontales.component.html',
  styleUrls: ['./soluciones-horizontales.component.scss']
})
export class SolucionesHorizontalesComponent implements OnInit {

  dataCards:any[] = [
    {
        name: 'Recibo de sueldo',
        desc: '',
        beneficios: '',
        imagen: 'assets/recibo-de-sueldo.png'
    },
    {
        name: 'Cuentas a Pagar',
        desc: '',
        beneficios: '',
        imagen: 'assets/cuentas-a-pagar.png'
    },
    {
        name: 'Legajos Digitales',
        desc: '',
        beneficios: '',
        imagen: 'assets/legajo-digital.png'
    },
    {
        name: 'Gestión de Contratos',
        desc: '',
        beneficios: '',
        imagen: 'assets/contratos.png'
    },
    {
        name: 'OnBoarding',
        desc: '',
        beneficios: '',
        imagen: 'assets/onboarding.png'
    }
]

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }
  
  openDialog() {
    this.dialog.open(DialogContactComponent);
  }

  openSolutionsModal(value): void {
    const dialogRef = this.dialog.open(SolucionesModalComponent, {
      width: '250px',
      data: this.dataCards[value]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.scss']
})
export class SolucionesComponent implements OnInit {

  dataCardsEs: any[] = [
    {
        name: 'Financiera',
        image: 'assets/icon-banca.png',
        path: '/banca'
    },
    {
        name: 'Seguros',
        image: 'assets/icon-seguros.png',
        path: '/seguros'
    },
    {
        name: 'Salud',
        image: 'assets/icon-salud.png',
        path: '/salud'
    },
    {
        name: 'Manufactura',
        image: 'assets/icon-industria.png',
        path: '/manufactura'
    },
    {
        name: 'Retail',
        image: 'assets/icon-retail.png',
        path: '/retail'
    },
    {
      name: 'Gobierno',
      image: 'assets/icon-gobierno.png',
      path: '/gobierno'
    },
    {
      name: 'Educacion',
      image: 'assets/icon-educacion.png',
      path: '/educacion'
    },
    {
      name: 'Servicios',
      image: 'assets/icon-servicios.png',
      path: '/servicios'
    },
  ];

  dataCardsEn: any[] = [
    {
        name: 'Financial',
        image: 'assets/icon-banca.png',
        path: '/banca'
    },
    {
        name: 'Insurance',
        image: 'assets/icon-seguros.png',
        path: '/seguros'
    },
    {
        name: 'Health',
        image: 'assets/icon-salud.png',
        path: '/salud'
    },
    {
        name: 'Manufacturing',
        image: 'assets/icon-industria.png',
        path: '/manufactura'
    },
    {
        name: 'Retail',
        image: 'assets/icon-retail.png',
        path: '/retail'
    },
    {
      name: 'Government',
      image: 'assets/icon-gobierno.png',
      path: '/gobierno'
    },
    {
      name: 'Education',
      image: 'assets/icon-educacion.png',
      path: '/educacion'
    },
    {
      name: 'Services',
      image: 'assets/icon-servicios.png',
      path: '/servicios'
    },
  ];

  constructor(
    private dialog: MatDialog,
    private translate: TranslateService,
  ) { }

  ngOnInit() {  
  }

  currentLanguage() {
    return this.translate.currentLang;
  }

  openDialog() {
    this.dialog.open(DialogContactComponent);
  }
}

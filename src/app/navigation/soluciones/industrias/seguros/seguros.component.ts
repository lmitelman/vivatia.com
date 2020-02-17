import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SolucionesModalComponent } from '../../soluciones-modal/soluciones-modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.scss']
})
export class SegurosComponent implements OnInit {

  dataCardsSegurosEs: any[] = [
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

  dataCardsSegurosEn: any[] = [
    {
      name: 'Sinister <br> claims',
      icon: 'assets/denuncias.png'
    },
    {
      name: 'Insurance <br> applications',
      icon: 'assets/solicitudes-de-seguros.png'
    },
    {
      name: 'Budgets and <br> workshops',
      icon: 'assets/solicitudes-de-apertura.png'
    },
    {
      name: 'Fleet <br> management',
      icon: 'assets/gestion-de-flotas.png'
    },
  ];

  constructor(private dialog: MatDialog, private translate: TranslateService) { }

  ngOnInit() {
  }

  currentLanguage() {
    return this.translate.currentLang;
  }

}

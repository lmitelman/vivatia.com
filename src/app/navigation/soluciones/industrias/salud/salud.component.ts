import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SolucionesModalComponent } from '../../soluciones-modal/soluciones-modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.scss']
})
export class SaludComponent implements OnInit {

  dataCardsSaludEs: any[] = [
    {
      name: 'Auditoría médica <br> y pagos',
      icon: 'assets/auditoria.png'
    },
    {
      name: 'Afiliaciones',
      icon: 'assets/afiliaciones.png'
    },
    {
      name: 'Reintegros',
      icon: 'assets/creditos-hipotecarios.png'
    },
    {
      name: 'Facturación',
      icon: 'assets/solicitudes-de-apertura.png'
    },
    {
      name: 'Historia clínica',
      icon: 'assets/historia-clinica.png'
    },
  ];

  dataCardsSaludEn: any[] = [
    {
      name: 'Medical audit <br> and payments',
      icon: 'assets/auditoria.png'
    },
    {
      name: 'Affiliations',
      icon: 'assets/afiliaciones.png'
    },
    {
      name: 'Refunds',
      icon: 'assets/creditos-hipotecarios.png'
    },
    {
      name: 'Billing',
      icon: 'assets/solicitudes-de-apertura.png'
    },
    {
      name: 'Clinical history',
      icon: 'assets/historia-clinica.png'
    },
  ];

  constructor(private dialog: MatDialog, private translate: TranslateService) {}

  ngOnInit() {
  }

  currentLanguage() {
    return this.translate.currentLang;
  }
}

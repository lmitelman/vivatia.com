import { Component, OnInit } from '@angular/core';
import { SolucionesModalComponent } from '../../soluciones-modal/soluciones-modal.component';
import { MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banca',
  templateUrl: './banca.component.html',
  styleUrls: ['./banca.component.scss']
})
export class BancaComponent implements OnInit {

  constructor(private dialog: MatDialog, private translate: TranslateService) {}

  dataCardsBancaEs: any[] = [
    {
      name: 'Solicitudes de créditos <br> personales, hipotecarios <br> y/o prendarios',
      icon: 'assets/creditos-hipotecarios.png'
    },
    {
      name: 'Solicitudes de aperturas <br> y mantenimiento <br> de cuentas',
      icon: 'assets/solicitudes-de-apertura.png'
    },
    {
      name: 'Solicitudes de <br> tarjetas de créditos',
      icon: 'assets/tarjetas.png'
    },
    {
      name: 'Solicitudes <br> multiproducto',
      icon: 'assets/solicitudes-multiproceso.png'
    },
    {
      name: 'Firma <br> digital',
      icon: 'assets/firma-digital-banca.png'
    },
    {
      name: 'Solicitudes de <br> comercio exterior',
      icon: 'assets/comercio-exterior.png'
    },
    {
      name: 'Alertas de <br> lavado de dinero',
      icon: 'assets/alertas-lavado.png'
    },
    {
      name: 'Gestión de <br> Garantías',
      icon: 'assets/gestion-de-garantias.png'
    },
    {
      name: 'Gestión de <br> Flotas',
      icon: 'assets/gestion-de-flotas.png'
    },
    {
      name: 'Captura de imágenes <br> desde sucursales',
      icon: 'assets/captura-de-imagenes.png'
    },
  ];

  dataCardsBancaEn: any[] = [
    {
      name: 'Loan <br> applications',
      icon: 'assets/creditos-hipotecarios.png'
    },
    {
      name: 'Requests for <br> account opening <br> and maintenance',
      icon: 'assets/solicitudes-de-apertura.png'
    },
    {
      name: 'Credit card <br> requests',
      icon: 'assets/tarjetas.png'
    },
    {
      name: 'Multiproduct <br> requests',
      icon: 'assets/solicitudes-multiproceso.png'
    },
    {
      name: 'Digital <br> signature',
      icon: 'assets/firma-digital-banca.png'
    },
    {
      name: 'Foreign trade <br> applications',
      icon: 'assets/comercio-exterior.png'
    },
    {
      name: 'Money laundering <br> alerts',
      icon: 'assets/alertas-lavado.png'
    },
    {
      name: 'Guarantees <br> management',
      icon: 'assets/gestion-de-garantias.png'
    },
    {
      name: 'Fleet <br> management',
      icon: 'assets/gestion-de-flotas.png'
    },
    {
      name: 'Document <br> capture',
      icon: 'assets/captura-de-imagenes.png'
    },
  ];

  currentLanguage() {
    return this.translate.currentLang;
  }

  ngOnInit() {
  }
}

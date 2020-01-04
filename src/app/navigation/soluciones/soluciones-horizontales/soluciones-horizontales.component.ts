import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';
import { SolucionesModalComponent } from '../soluciones-modal/soluciones-modal.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-soluciones-horizontales',
  templateUrl: './soluciones-horizontales.component.html',
  styleUrls: ['./soluciones-horizontales.component.scss']
})
export class SolucionesHorizontalesComponent implements OnInit {

  dataCards: any[] = [
    {
        name: 'Recibo de sueldo',
        problems: [
          'Fallas de seguridad en el manejo de información',
          'Grandes costos y pérdida de tiempo en la distribución',
          'Excesivos volúmenes de papel'
        ],
        benefits: [
          'Creación de legajos digitales de empleados',
          'Firma masiva de manera digital con validéz legal',
          'Mayor capacidad de monitoreo y seguimiento'
        ],
        image: 'assets/recibo-de-sueldo.png'
    },
    {
        name: 'Cuentas a Pagar',
        problems: [
          'Demora gestion manual de los comprobantes de pago',
          'Generación de cuellos de botella',
          'Excesivos volúmenes de papel'
        ],
        benefits: [
          'Disponibilidad en múltiples dispositivos',
          'Alertas por correo',
          'Creación de legajos digitales de documentación'
        ],
        image: 'assets/cuentas-a-pagar.png'
    },
    {
        name: 'Legajos Digitales',
        problems: [
          'Desentralización de información',
          'Pérdida de documentación',
          'Poco optima búsqueda de documentación'
        ],
        benefits: [
          'Repositorio centralizado',
          'Optima búsqueda de información mediante campo índices',
          'Documentación 100% digital'
        ],
        image: 'assets/legajo-digital.png'
    },
    {
        name: 'Gestión de Contratos',
        problems: [
          'Falta de alertas por próximos vencimientos',
          'Sin seguimiento de ciclo de vida de contratos',
          'Excesivos volúmenes de papel'
        ],
        benefits: [
          'Seguimiento completo y alertas por vencimiento',
          'Integración con firma digital y electrónica',
          'Creación de legajos digitales de documentación'
        ],
        image: 'assets/contratos.png'
    },
    {
        name: 'OnBoarding',
        problems: [
          'Descentralización de la información ',
          'Generación de cuellos de botella',
          'Excesivos volúmenes de papel'
        ],
        benefits: [
          'Reducción de tiempos de procesamiento y rápido retorno de la inversión inicial',
          'Seguridad y confiabilidad mediante diferentes perfiles de usuarios',
          'Personalización completa'
        ],
        image: 'assets/onboarding.png'
    }
];

  constructor(private dialog: MatDialog, private translate: TranslateService) {
  }

  currentLanguage() {
    console.log(this.translate.currentLang);
  }

  openDialog() {
    this.dialog.open(DialogContactComponent);
  }

  openSolutionsModal(value): void {
    const dialogRef = this.dialog.open(SolucionesModalComponent, {
      data: this.dataCards[value]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    console.log(this.currentLanguage())
  }
}

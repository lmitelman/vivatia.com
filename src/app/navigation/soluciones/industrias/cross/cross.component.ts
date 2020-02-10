import { Component, OnInit } from '@angular/core';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-cross',
  templateUrl: './cross.component.html',
  styleUrls: ['./cross.component.scss']
})
export class CrossComponent implements OnInit {

  dataCards: any[] = [
    {
        name: 'Recursos humanos',
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
        image: 'assets/recibo-de-sueldo.png',
        path: '/recursos-humanos'
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
        image: 'assets/cuentas-a-pagar.png',
        path: '/cuentas-a-pagar'
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
          'Búsqueda de información mediante campos índices',
          'Documentación 100% digital'
        ],
        image: 'assets/legajo-digital.png',
        path: '/legajos-digitales'
    },
    {
        name: 'Contratos',
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
        image: 'assets/contratos.png',
        path: '/contratos'
    },
    {
        name: 'OnBoarding',
        problems: [
          'Descentralización de la información ',
          'Generación de cuellos de botella',
          'Excesivos volúmenes de papel'
        ],
        benefits: [
          'Reducción de tiempos de procesamiento',
          'Diferentes perfiles de usuarios',
          'Personalización completa'
        ],
        image: 'assets/onboarding.png',
        path: '/onboarding'
    },
    {
      name: 'Compras',
      problems: [
        'Descentralización de la información ',
        'Generación de cuellos de botella',
        'Excesivos volúmenes de papel'
      ],
      benefits: [
        'Reducción de tiempos de procesamiento',
        'Diferentes perfiles de usuarios',
        'Personalización completa'
      ],
      image: 'assets/compras.png',
      path: '/compras'
    },
    {
      name: 'Firma Digital',
      problems: [
        'Descentralización de la información ',
        'Generación de cuellos de botella',
        'Excesivos volúmenes de papel'
      ],
      benefits: [
        'Reducción de tiempos de procesamiento',
        'Diferentes perfiles de usuarios',
        'Personalización completa'
      ],
      image: 'assets/firma-digital.png',
      path: '/firma-digital'
    },
    {
      name: 'Digitalización',
      problems: [
        'Descentralización de la información ',
        'Generación de cuellos de botella',
        'Excesivos volúmenes de papel'
      ],
      benefits: [
        'Reducción de tiempos de procesamiento',
        'Diferentes perfiles de usuarios',
        'Personalización completa'
      ],
      image: 'assets/digitalizacion.png',
      path: '/digitalizacion'
    }
];

  constructor(
    private dialog: MatDialog,
  ) {}
  
  ngOnInit() {
  }
  
  openDialog() {
    this.dialog.open(DialogContactComponent);
  }

}


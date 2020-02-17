import { Component, OnInit } from '@angular/core';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';
import { MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cross',
  templateUrl: './cross.component.html',
  styleUrls: ['./cross.component.scss']
})
export class CrossComponent implements OnInit {

  dataCardsEs: any[] = [
    {
      name: 'Recursos humanos',
      image: 'assets/recibo-de-sueldo.png',
      path: '/recursos-humanos'
    },
    {
      name: 'Cuentas a Pagar',
      image: 'assets/cuentas-a-pagar.png',
      path: '/cuentas-a-pagar'
    },
    {
      name: 'Legajos Digitales',
      image: 'assets/legajo-digital.png',
      path: '/legajos-digitales'
    },
    {
      name: 'Contratos',
      image: 'assets/contratos.png',
      path: '/contratos'
    },
    {
      name: 'OnBoarding',
      image: 'assets/onboarding.png',
      path: '/onboarding'
    },
    {
      name: 'Compras',
      image: 'assets/compras.png',
      path: '/compras'
    },
    {
      name: 'Firma Digital',
      image: 'assets/firma-digital.png',
      path: '/firma-digital'
    },
    {
      name: 'Digitalización',
      image: 'assets/digitalizacion.png',
      path: '/digitalizacion'
    }
  ];

  dataCardsEn: any[] = [
    {
      name: 'Human resources',
      image: 'assets/recibo-de-sueldo.png',
      path: '/recursos-humanos'
    },
    {
      name: 'Accounts payable ',
      image: 'assets/cuentas-a-pagar.png',
      path: '/cuentas-a-pagar'
    },
    {
      name: 'Digital files',
      image: 'assets/legajo-digital.png',
      path: '/legajos-digitales'
    },
    {
      name: 'Contracts',
      image: 'assets/contratos.png',
      path: '/contratos'
    },
    {
      name: 'OnBoarding',
      image: 'assets/onboarding.png',
      path: '/onboarding'
    },
    {
      name: 'Purchases',
      image: 'assets/compras.png',
      path: '/compras'
    },
    {
      name: 'Digital signature',
      image: 'assets/firma-digital.png',
      path: '/firma-digital'
    },
    {
      name: 'Digitization',
      image: 'assets/digitalizacion.png',
      path: '/digitalizacion'
    }
  ];


  constructor(
    private dialog: MatDialog,
    private translate: TranslateService
  ) {}
  
  ngOnInit() {
  }
  
  openDialog() {
    this.dialog.open(DialogContactComponent);
  }

  currentLanguage() {
    return this.translate.currentLang;
  }

}



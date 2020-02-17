import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from '../../dialog-contact/dialog-contact.component';
import { DialogPartnersComponent } from './dialog-partners/dialog-partners.component';
import { TranslateService } from '@ngx-translate/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  dataCardsPartnersEs: any[] = [
    {
      name: 'Revendedor',
      icon: 'assets/revendedor.png',
      desc: 'Si querés revender nuestros productos y soluciones de software'
    },
    {
      name: 'Integrador',
      icon: 'assets/integrador.png',
      desc: 'Si tu objetivo es revender nuestros productos con tu valor agregado, desarrollando soluciones'
    },
    {
      name: 'Educador',
      icon: 'assets/educador.png',
      desc: 'Si buscas capacitar a otras personas o empresas en el uso de nuestros productos de software'
    },
    {
      name: 'Socio tecnológico',
      icon: 'assets/socio.png',
      desc: 'Si consideras que tus productos y los nuestros pueden potenciarse juntos'
    },
  ];

  dataCardsPartnersEn: any[] = [
    {
      name: 'Reseller',
      icon: 'assets/revendedor.png',
      desc: 'If you want to resell our products and software solutions'
    },
    {
      name: 'Integrator',
      icon: 'assets/integrador.png',
      desc: 'If your goal is to resell our products and solutions with your added value'
    },
    {
      name: 'Educator',
      icon: 'assets/educador.png',
      desc: 'If you want to train other people or companies in the use of our software products'
    },
    {
      name: 'Technological partner',
      icon: 'assets/socio.png',
      desc: 'If you consider that your products can complement ours'
    },
  ];

  constructor(
    private dialog: MatDialog,
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DialogPartnersComponent, { height: '470px', width: '600px', });
  }

  currentLanguage() {
    return this.translate.currentLang;
  }
}

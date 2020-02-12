import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from '../../dialog-contact/dialog-contact.component';
import { DialogPartnersComponent } from './dialog-partners/dialog-partners.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  message: any;  
  dataCardsPartners: any;
  

  constructor(
    private dialog: MatDialog,
    private translate: TranslateService
  ) {
    translate.onLangChange.subscribe(lang=>{
      console.log(lang);
      this.translate.use(lang.lang);
      })
  }

  ngOnInit() {
    this.translate.get('PARTNERS').subscribe((res: string) => {
      this.message = res;
      this.declare();
    });
  }

  declare(){
    console.log(this.message);
    this.dataCardsPartners = [
      {
        name: this.message['REVENDEDOR'],
        icon: 'assets/revendedor.png',
        desc: 'Si querés revender nuestros productos y soluciones de software'
      },
      {
        name: this.message['INTEGRADOR'],
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
  }

  openDialog() {
    this.dialog.open(DialogPartnersComponent , {  height: '470px', width: '600px',});
  }
}

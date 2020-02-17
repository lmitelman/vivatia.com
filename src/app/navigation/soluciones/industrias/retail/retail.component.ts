import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.scss']
})
export class RetailComponent implements OnInit {

  dataCardsBancaEs: any[] = [
    {
      name: 'Préstamos',
      icon: 'assets/creditos-hipotecarios.png'
    },
    {
      name: 'Mantenimiento <br> de sucursales',
      icon: 'assets/solicitudes-de-apertura.png'
    },
    {
      name: 'Solicitudes de <br> tarjetas ',
      icon: 'assets/tarjetas.png'
    },
    {
      name: 'Reclamos <br> digitales',
      icon: 'assets/solicitudes-multiproceso.png'
    },
  ];

  dataCardsBancaEn: any[] = [
    {
      name: 'Loans',
      icon: 'assets/creditos-hipotecarios.png'
    },
    {
      name: 'Branches <br> maintenance',
      icon: 'assets/solicitudes-de-apertura.png'
    },
    {
      name: 'Card <br> Requests ',
      icon: 'assets/tarjetas.png'
    },
    {
      name: 'Digital <br> claims',
      icon: 'assets/solicitudes-multiproceso.png'
    },
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  currentLanguage() {
    return this.translate.currentLang;
  }

}

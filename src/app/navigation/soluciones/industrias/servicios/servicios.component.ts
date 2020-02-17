import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  dataCardsBancaEs: any[] = [
    {
      name: 'Solicitudes <br> multiproducto',
      icon: 'assets/solicitudes-multiproceso.png'
    },
    {
      name: 'Firma <br> digital',
      icon: 'assets/firma-digital-banca.png'
    },
    {
      name: 'Mantenimiento <br> de equipamiento',
      icon: 'assets/mantenimiento-equipamiento.png'
    },
  ];

  dataCardsBancaEn: any[] = [
    {
      name: 'Multi-product <br> requests',
      icon: 'assets/solicitudes-multiproceso.png'
    },
    {
      name: 'Digital <br> signature',
      icon: 'assets/firma-digital-banca.png'
    },
    {
      name: 'Equipment <br> maintenance',
      icon: 'assets/mantenimiento-equipamiento.png'
    },
  ];

  constructor(private dialog: MatDialog, private translate: TranslateService) { }

  ngOnInit() {
  }

  currentLanguage() {
    return this.translate.currentLang;
  }

}

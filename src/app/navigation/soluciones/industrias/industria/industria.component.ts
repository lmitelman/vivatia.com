import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-industria',
  templateUrl: './industria.component.html',
  styleUrls: ['./industria.component.scss']
})
export class IndustriaComponent implements OnInit {

  public innerWidth: any;

  dataCardsIndustriaEs: any[] = [
    {
      name: 'Mantenimiento <br> de plantas',
      icon: 'assets/mantenimieno-plantas.png'
    },
    {
      name: 'Mantenimiento <br> de equipamiento',
      icon: 'assets/mantenimiento-equipamiento.png'
    },
    {
      name: 'Elementos para <br> el personal',
      icon: 'assets/elementos.png'
    },
  ];

  dataCardsIndustriaEn: any[] = [
    {
      name: 'Plant <br> maintenance',
      icon: 'assets/mantenimieno-plantas.png'
    },
    {
      name: 'Equipment <br> maintenance',
      icon: 'assets/mantenimiento-equipamiento.png'
    },
    {
      name: 'Staff <br> equipment',
      icon: 'assets/elementos.png'
    },
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth
  }

  currentLanguage() {
    return this.translate.currentLang;
  }

  isMobile() {
		if (this.innerWidth < 850) {
			return true;
		}
	}

}

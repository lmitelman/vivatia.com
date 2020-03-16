import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gobierno',
  templateUrl: './gobierno.component.html',
  styleUrls: ['./gobierno.component.scss']
})
export class GobiernoComponent implements OnInit {

  public innerWidth: any;

  dataCardsBancaEs: any[] = [
    {
      name: 'Habilitaciones',
      icon: 'assets/habilitaciones.png'
    },
    {
      name: 'Defensa del <br> consumidor',
      icon: 'assets/consumidor.png'
    },
    {
      name: 'Gestión de <br> denuncias',
      icon: 'assets/gestion-denuncias.png'
    },
    {
      name: 'Mediaciones',
      icon: 'assets/habilitaciones.png'
    },
    {
      name: 'Gestión digital <br> de expedientes',
      icon: 'assets/expedientes.png'
    },
    {
      name: 'Turnos <br> generales',
      icon: 'assets/turnos.png'
    },
  ];

  dataCardsBancaEn: any[] = [
    {
      name: 'Qualifications',
      icon: 'assets/habilitaciones.png'
    },
    {
      name: 'Consumer <br> advocacy',
      icon: 'assets/consumidor.png'
    },
    {
      name: 'Complaint <br> management',
      icon: 'assets/gestion-denuncias.png'
    },
    {
      name: 'Mediations',
      icon: 'assets/habilitaciones.png'
    },
    {
      name: 'Digital record <br> management  ',
      icon: 'assets/expedientes.png'
    },
    {
      name: 'General <br> requests',
      icon: 'assets/turnos.png'
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

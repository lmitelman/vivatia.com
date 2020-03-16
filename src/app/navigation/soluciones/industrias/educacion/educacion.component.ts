import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SolucionesModalComponent } from '../../soluciones-modal/soluciones-modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  public innerWidth: any;

  dataCardsBancaEs: any[] = [
    {
      name: 'Legajos de <br> alumnos',
      icon: 'assets/alumnos.png'
    },
    {
      name: 'Legajos de <br> profesores',
      icon: 'assets/profesores.png'
    },
    {
      name: 'Inscripcioness',
      icon: 'assets/incripciones.png'
    },
    {
      name: 'Gestión de exámenes <br> y calificaciones',
      icon: 'assets/examenes.png'
    },
    {
      name: 'Digitalización de <br> contenidos educativos',
      icon: 'assets/contenidos.png'
    },
  ];

  dataCardsBancaEn: any[] = [
    {
      name: 'Student <br> files',
      icon: 'assets/alumnos.png'
    },
    {
      name: 'Teacher <br> files',
      icon: 'assets/profesores.png'
    },
    {
      name: 'Registrations',
      icon: 'assets/incripciones.png'
    },
    {
      name: 'Exam <br> management',
      icon: 'assets/examenes.png'
    },
    {
      name: 'Educational content <br> digitization',
      icon: 'assets/contenidos.png'
    },
  ];

  constructor(private dialog: MatDialog, private translate: TranslateService) {}

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

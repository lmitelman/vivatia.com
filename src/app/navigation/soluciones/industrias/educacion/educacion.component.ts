import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SolucionesModalComponent } from '../../soluciones-modal/soluciones-modal.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  dataCardsBanca: any[] = [
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

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  }

}

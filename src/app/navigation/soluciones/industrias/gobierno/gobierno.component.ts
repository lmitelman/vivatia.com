import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gobierno',
  templateUrl: './gobierno.component.html',
  styleUrls: ['./gobierno.component.scss']
})
export class GobiernoComponent implements OnInit {

  dataCardsBanca: any[] = [
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

  constructor() { }

  ngOnInit() {
  }

}

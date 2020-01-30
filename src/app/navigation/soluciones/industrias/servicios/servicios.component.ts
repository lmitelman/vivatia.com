import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  dataCardsBanca: any[] = [
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

  constructor() { }

  ngOnInit() {
  }

}

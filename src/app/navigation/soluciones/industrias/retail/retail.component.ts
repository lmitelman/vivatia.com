import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.scss']
})
export class RetailComponent implements OnInit {

  dataCardsBanca: any[] = [
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

  constructor() { }

  ngOnInit() {
  }

}

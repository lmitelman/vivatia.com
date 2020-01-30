import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industria',
  templateUrl: './industria.component.html',
  styleUrls: ['./industria.component.scss']
})
export class IndustriaComponent implements OnInit {

    dataCardsIndustria: any[] = [
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

  constructor() { }

  ngOnInit() {
  }

}

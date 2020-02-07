import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.scss']
})
export class CapacitacionComponent implements OnInit {

  itemsCapacitacionProducto: any[] = [
    {
      name: 'Instalaciones de producto.',
    },
    {
      name: 'Configuraciones básicas y avanzadas.',
    },
    {
      name: 'Creación de una solución de principio a fin, en base a un caso práctico.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

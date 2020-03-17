import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.scss']
})
export class CapacitacionComponent implements OnInit {

  public innerWidth: any;

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

  constructor(
    private translate: TranslateService,
    private dialog: MatDialog,
  ) { }

	ngOnInit() {
		this.innerWidth = window.innerWidth
	}

	isMobile() {
		if (this.innerWidth < 850) {
			return true;
		}
	}

  openDialog() {
    this.dialog.open(DialogContactComponent);
  }

  currentLanguage() {
    return this.translate.currentLang;
  }
}

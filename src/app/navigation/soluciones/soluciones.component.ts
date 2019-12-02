import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogSolutionsComponent } from 'src/app/navigation/soluciones/dialog-solutions/dialog-solutions.component';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';

@Component({
  selector: 'app-soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.scss']
})
export class SolucionesComponent implements OnInit {


  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    
  }

  solutions: string[] = ['Legajos Digitales', 'Recibos de Sueldo', 'Cuentas a Pagar', 'Onboarding', 'Recursos Humanos', 'Gestión de Contratos']
  // 'Solicitudes y Licencias', 'Compras', 'Rendición de Gastos', 'Comercio Exterior', 'Préstamos', 'Busqueda y Consulta', 'Siniestros', 'Emisión de Pólizas', 'Originación de Tramites', 'Mesa de Entrada', 'Gestión de Auditorías', 'Gestión de Pasantías', 'E-Government', 'Solicitud de Préstamo Prendario', 'Actuaciones', 'CRM', 'Entrega de EPP', 'Reintegros'];
  

  openDialogSolutions(data) {
    this.dialog.open(DialogSolutionsComponent, {
      data
    });
  }

  openDialogContact() {
    this.dialog.open(DialogContactComponent);
  }
}

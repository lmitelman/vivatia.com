import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';

@Component({
  selector: 'app-soluciones-horizontales',
  templateUrl: './soluciones-horizontales.component.html',
  styleUrls: ['./soluciones-horizontales.component.scss']
})
export class SolucionesHorizontalesComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }
  
  openDialog() {
    this.dialog.open(DialogContactComponent);
  }
}

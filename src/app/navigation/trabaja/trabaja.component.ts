import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';

@Component({
  selector: 'app-trabaja',
  templateUrl: './trabaja.component.html',
  styleUrls: ['./trabaja.component.scss']
})
export class TrabajaComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  }


  openDialog(){
    this.dialog.open(DialogContactComponent);
  }
} 

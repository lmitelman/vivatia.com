import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private dialog: MatDialog,  
  ) { } 

  ngOnInit() {
  }

  openDialogContact() {
    this.dialog.open(DialogContactComponent);
  }

}

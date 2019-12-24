import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { MatSnackBar } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountoModule } from 'angular2-counto';
import { TranslateModule } from '@ngx-translate/core'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactForm: FormGroup;
  private stream;
  public isMobileLayout = false;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }


  ngOnInit() {
    this.createContactForm();  
  }

  private createContactForm() {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    })
  }

  openSnackBar() {                  //  openSnackBar(message, action)
    this.snackBar.open('Mail cargado con exito', 'Aceptar', { duration: 1500 });
  }

  openDialog() {
    this.dialog.open(DialogContactComponent);
  }
}



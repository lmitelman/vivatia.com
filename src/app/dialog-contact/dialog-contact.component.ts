import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-dialog-contact',
  templateUrl: './dialog-contact.component.html',
  styleUrls: ['./dialog-contact.component.scss']
})
export class DialogContactComponent implements OnInit {

  contactForm: FormGroup;
  private stream;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.createContactForm();
  }

  private createContactForm() {
    this.contactForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      userMail: ['', [Validators.required]],
      userMessage: ['', [Validators.required]],
    });
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, { duration: 3000 });
  }

  login() {
    this.adminService.login('admin', 'thuban', true)
      .subscribe(
        data => {}
      )
  }

  createDocument() {
    if (this.contactForm.valid) {
      this.openSnackBar('Su consulta ha sido enviada', 'Aceptar');
      const stream = this.stream.split('base64,');
      const params = {
        ...this.contactForm.value,
        stream: stream[1]
      }
      this.adminService.createDocument(params)
        .subscribe(
          data => {
            this.openSnackBar('Su consulta ha sido enviada', 'Aceptar');
          },
          (error) => {
            console.log(error);
          }
        )
    } else {
      this.openSnackBar('Completa los datos solicitados', 'Aceptar');
    }
  }
}

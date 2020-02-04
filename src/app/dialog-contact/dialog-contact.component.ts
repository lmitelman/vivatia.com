import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AdminService } from '../services/admin.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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
      from_name: ['', [Validators.required]],
      user_email: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, { duration: 3000 });
  }

  public sendContactanosEmail(e: Event) {
    let template_params = {
      "reply_to": "",
      "user_name": "",
      "to_name": "",
      "from_name": this.contactForm.get('from_name').value,
      "message_html": this.contactForm.get('message').value
    }
    e.preventDefault();
    emailjs.send('gmail', 'template_5K0dpaJj', template_params, 'user_FtQgtMf0GtAy339a8Np5O')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-dialog-partners',
  templateUrl: './dialog-partners.component.html',
  styleUrls: ['./dialog-partners.component.scss']
})
export class DialogPartnersComponent implements OnInit {

  contactForm: FormGroup;
  private stream;
  error: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) { }

    dataCardsPartners: any[] = [
    {
      name: 'Revendedor',
      icon: 'assets/revendedor.png',
      desc: 'Si querés revender nuestros productos y soluciones de software'
    },
    {
      name: 'Integrador',
      icon: 'assets/integrador.png',
      desc: 'Si tu objetivo es revender nuestros productos con tu valor agregado, desarrollando soluciones'
    },
    {
      name: 'Educador',
      icon: 'assets/educador.png',
      desc: 'Si buscas capacitar a otras personas o empresas en el uso de nuestros productos de software'
    },
    {
      name: 'Socio tecnológico',
      icon: 'assets/socio.png',
      desc: 'Si consideras que tus productos y los nuestros pueden potenciarse juntos'
    },
  ];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
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

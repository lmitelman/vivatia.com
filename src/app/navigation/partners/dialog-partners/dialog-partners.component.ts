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
  thirdFormGroup: FormGroup;

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
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      empresa: ['', Validators.required],
      rol: ['', Validators.required],
      paises: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      mail: ['', Validators.required]
    });
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, { duration: 3000 });
  }

  public sendPartnersEmail(e: Event) {
    let template_params = {
      // "partner_type": ,
      "from_name": this.thirdFormGroup.get('from_name').value,
      "from_last_name": this.thirdFormGroup.get('from_last_name').value,
      "user_email": this.thirdFormGroup.get('user_email').value,
      "company_countries": this.secondFormGroup.get('company_countries').value,
      "user_role": this.secondFormGroup.get('user_role').value,
      "user_company": this.secondFormGroup.get('user_company').value
    }
    // e.preventDefault();
    emailjs.send('default_service', 'partners', template_params, 'user_FtQgtMf0GtAy339a8Np5O')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}

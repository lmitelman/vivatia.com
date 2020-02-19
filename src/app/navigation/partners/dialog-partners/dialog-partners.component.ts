import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { TranslateService } from '@ngx-translate/core';

export interface industrias {
  value: string;
  viewValue: string
}

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
    private translate: TranslateService
  ) { }

  dataCardsPartnersEs: any[] = [
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

  dataCardsPartnersEn: any[] = [
    {
      name: 'Reseller',
      icon: 'assets/revendedor.png',
      desc: 'If you want to resell our products and software solutions'
    },
    {
      name: 'Integrator',
      icon: 'assets/integrador.png',
      desc: 'If your goal is to resell our products and solutions with your added value'
    },
    {
      name: 'Educator',
      icon: 'assets/educador.png',
      desc: 'If you want to train other people or companies in the use of our software products'
    },
    {
      name: 'Technological partner',
      icon: 'assets/socio.png',
      desc: 'If you consider that your products can complement ours'
    },
  ];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      partner_type: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      user_company: ['', Validators.required],
      user_role: ['', Validators.required],
      company_countries: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      from_name: ['', Validators.required],
      from_last_name: ['', Validators.required],
      user_email: ['', Validators.required]
    });
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, { duration: 3000 });
  }

  // public sendPartnersEmail() {
  //   let template_params = {
  //     "partner_type": this.firstFormGroup.get('partner_type').value,
  //     "from_name": this.thirdFormGroup.get('from_name').value,
  //     "from_last_name": this.thirdFormGroup.get('from_last_name').value,
  //     "user_email": this.thirdFormGroup.get('user_email').value,
  //     "company_countries": this.secondFormGroup.get('company_countries').value,
  //     "user_role": this.secondFormGroup.get('user_role').value,
  //     "user_company": this.secondFormGroup.get('user_company').value
  //   }
  //   emailjs.send('default_service', 'partners', template_params, 'user_FtQgtMf0GtAy339a8Np5O')
  //     .then((result: EmailJSResponseStatus) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // }

  public sendPartnersEmailWithCaptcha() {
    if (grecaptcha.getResponse() == "") {
      alert("Captcha error");
    } else {
      let template_params = {
        "partner_type": this.firstFormGroup.get('partner_type').value,
        "from_name": this.thirdFormGroup.get('from_name').value,
        "from_last_name": this.thirdFormGroup.get('from_last_name').value,
        "user_email": this.thirdFormGroup.get('user_email').value,
        "company_countries": this.secondFormGroup.get('company_countries').value,
        "user_role": this.secondFormGroup.get('user_role').value,
        "user_company": this.secondFormGroup.get('user_company').value
      }
      emailjs.send('default_service', 'partners', template_params, 'user_FtQgtMf0GtAy339a8Np5O')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  }

  industriasEs: industrias[] = [
    { value: 'seguros', viewValue: 'Seguros' },
    { value: 'salud', viewValue: 'Salud' },
    { value: 'manufactura', viewValue: 'Manufactura'},
    { value: 'financiera', viewValue: 'Finanzas'},
    { value: 'servicios', viewValue: 'Servicios'},
    { value: 'educacion', viewValue: 'Educación'},
    { value: 'retail', viewValue: 'Retail'},
    { value: 'gobierno', viewValue: 'Gobierno'},
  ];

  industriasEn: industrias[] = [
    { value: 'financial', viewValue: 'Financial' },
    { value: 'health', viewValue: 'Health' },
    { value: 'insurance', viewValue: 'Insurance'},
    { value: 'manufacturing', viewValue: 'Manufacturing'},
    { value: 'retail', viewValue: 'Retail'},
    { value: 'education', viewValue: 'Education'},
    { value: 'services', viewValue: 'Services'},
    { value: 'government', viewValue: 'Government'},
  ];

  // public checkCaptcha() {
  //   if (grecaptcha.getResponse() == "") {
  //     alert("You can't proceed!");
  //   } else {
  //     alert("Thank you");
  //   }
  // }

  currentLanguage() {
    return this.translate.currentLang;
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}

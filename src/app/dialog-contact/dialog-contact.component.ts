import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dialog-contact',
	templateUrl: './dialog-contact.component.html',
	styleUrls: ['./dialog-contact.component.scss']
})
export class DialogContactComponent implements OnInit {

	contactForm: FormGroup;
	error: string;

	constructor(
		private formBuilder: FormBuilder,
		private translate: TranslateService,
		private router: Router
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

	public sendPartnersEmailWithCaptcha() {
		if (grecaptcha.getResponse() == "") {
			alert("Captcha error");
		} else {
			let template_params = {
				"reply_to": "",
				"user_name": "",
				"user_email": this.contactForm.get('user_email').value,
				"from_name": this.contactForm.get('from_name').value,
				"message_html": this.contactForm.get('message').value
			}
			emailjs.send('gmail', 'template_5K0dpaJj', template_params, 'user_FtQgtMf0GtAy339a8Np5O')
				.then((result: EmailJSResponseStatus) => {
					console.log(result.text);
				}, (error) => {
					console.log(error.text);
				});
			this.router.navigateByUrl("/gracias");
		}
	}

	currentLanguage() {
		return this.translate.currentLang;
	}

	resolved(captchaResponse: string) {
		console.log(`Resolved captcha with response: ${captchaResponse}`);
	}
}

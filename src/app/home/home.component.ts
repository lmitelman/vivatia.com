import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core'


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	imgBBVA: string = "assets/clientes/bbva-bn.png";
	imgGROUPM: string = "assets/clientes/groupm-bn.png";
	imgGALENO: string = "assets/clientes/galeno-bn.png";
	imgSANTANDER: string = "assets/clientes/santander-bn.png";
	imgXEROX: string = "assets/clientes/xerox-bn.png";
	imgCLOVER: string = "assets/clientes/clover-bn.png";

	fontTextEs: String[] = [
		'digital.',
		'paperless.',
		'vivatia.',
		'tecnológica.',
	];
	fontTextEn: String[] = [
		'digital',
		'paperless',
		'vivatia',
		'technological',
	];

	contactForm: FormGroup;
	typed: any;
	public innerWidth: any;
	positionArrayText = 0;

	constructor(
		private formBuilder: FormBuilder,
		private snackBar: MatSnackBar,
		private dialog: MatDialog,
		private translate: TranslateService
	) { }

	ngOnInit() {
		this.createContactForm();
		this.innerWidth = window.innerWidth
	}

	isMobile() {
		if (this.innerWidth < 850) {
			return true;
		}
	}

	private createContactForm() {
		this.contactForm = this.formBuilder.group({
			email: ['', [Validators.required]]
		})
	}

	openSnackBar() {                  
		this.snackBar.open('Mail cargado con exito', 'Aceptar', { duration: 1500 });
	}

	openDialog() {
		this.dialog.open(DialogContactComponent);
	}

	doSmth(indexOfString) {
		this.positionArrayText = indexOfString;
	}

	currentLanguage() {
		return this.translate.currentLang;
	}
}



import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'appcoronavirus-contact',
	templateUrl: './dialog-coronavirus.component.html',
	styleUrls: ['./dialog-coronavirus.component.scss']
})
export class DialogCoronavirusComponent implements OnInit {


	constructor(
		private translate: TranslateService
	) { }

	ngOnInit() {
	}

	currentLanguage() {
		return this.translate.currentLang;
	}
}

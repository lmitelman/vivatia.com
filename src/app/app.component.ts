import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter} from 'rxjs/operators'

declare var gtag;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Vivatia';
	langs: string[] = [];

	constructor(private dialog: MatDialog, private translate: TranslateService, public router: Router) {
		this.translate.setDefaultLang('es');
		this.translate.use('es');
		this.translate.addLangs(['es', 'en', 'pt']);
		this.langs = this.translate.getLangs();

		// subscribe to router events and send page views to Google Analytics
		const navEndEvents$ = this.router.events
			.pipe(
				filter(event => event instanceof NavigationEnd)
			);
		navEndEvents$.subscribe((event: NavigationEnd) => {
			gtag('config', 'UA-8376838-1', {
				'page_path': event.urlAfterRedirects
			});
		});
	}

	useLanguage(lang: string) {
		this.translate.use(lang);
	}

	ngOnInit() {
	}

	openDialog() {
		this.dialog.open(DialogContactComponent);
	}
}

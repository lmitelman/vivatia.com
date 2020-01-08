import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Vivatia';
  langs: string[] = []; 

  constructor(private dialog: MatDialog, private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en', 'pt']);
    this.langs = this.translate.getLangs();
  }

  useLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
  }

  openDialog(){
    this.dialog.open(DialogContactComponent);
  }
}

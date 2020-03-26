import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isMobileLayout = false;
  isNavbarCollapsed = true;
  langs: string[] = [];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en', 'pt']);
    this.langs = this.translate.getLangs();
  }

  useLanguage(lang: string) {
    this.translate.use(lang);
  }

  currentLanguage() {
    console.log(this.translate.currentLang);
    return this.translate.currentLang;
  }

  ngOnInit() {
    window.onload = () => this.isMobileLayout = window.innerWidth <= 820;
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 820;
  }

}

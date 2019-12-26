import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { TranslateModule, TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private mobile: boolean = false;
  public isMobileLayout = false;
  // private web : boolean = false;
  langs: string[] = []; 

  constructor(private breakpointObserver: BreakpointObserver, private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en', 'pt']);
    this.langs = this.translate.getLangs();
  }

  useLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
    window.onload = () => this.isMobileLayout = window.innerWidth <= 820;
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 820;   
  }

}


//poner logica para ver de que el sidenav se cierre cuando picas en una opcion del menu
//que ademas haga scroll to the top cuando picas en una opcion

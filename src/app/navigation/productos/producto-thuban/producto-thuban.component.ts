import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-producto-thuban',
  templateUrl: './producto-thuban.component.html',
  styleUrls: ['./producto-thuban.component.scss']
})
export class ProductoThubanComponent implements OnInit {

  public innerWidth: any;
  path: string = '';
  lang: string = ''
  constructor(
    private translate: TranslateService
  ) { }

  currentLanguage() {
    return this.translate.currentLang;
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth
    this.lang = this.currentLanguage();
  }

  isMobile(){
    if (this.innerWidth < 850) {
      return true
    }
    else if (this.innerWidth >= 850) {
      return false
    }
  }

}


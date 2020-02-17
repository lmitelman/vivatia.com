import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-personalizacion',
  templateUrl: './personalizacion.component.html',
  styleUrls: ['./personalizacion.component.scss']
})
export class PersonalizacionComponent implements OnInit {

  constructor(private translate: TranslateService ) { }

  ngOnInit() {
  }

}

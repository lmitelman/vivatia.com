import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogSumateComponent } from './dialog-sumate/dialog-sumate.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sumate',
  templateUrl: './sumate.component.html',
  styleUrls: ['./sumate.component.scss']
})
export class SumateComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private translate: TranslateService 
  ) {}

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DialogSumateComponent);
  }

  currentLanguage() {
    return this.translate.currentLang;
  }

}

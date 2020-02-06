import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogSumateComponent } from './dialog-sumate/dialog-sumate.component';

@Component({
  selector: 'app-sumate',
  templateUrl: './sumate.component.html',
  styleUrls: ['./sumate.component.scss']
})
export class SumateComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DialogSumateComponent);
  }

}

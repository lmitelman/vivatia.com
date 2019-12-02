import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-solutions',
  templateUrl: './dialog-solutions.component.html',
  styleUrls: ['./dialog-solutions.component.scss']
})
export class DialogSolutionsComponent implements OnInit {



  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);
  }




}

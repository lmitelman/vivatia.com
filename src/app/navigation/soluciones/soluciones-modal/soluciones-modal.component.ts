import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-soluciones-modal',
  templateUrl: './soluciones-modal.component.html',
  styleUrls: ['./soluciones-modal.component.scss']
})
export class SolucionesModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SolucionesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

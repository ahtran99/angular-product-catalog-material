import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import a4data from '../../assets/data/A4.json';
import { Company } from '../a4interface';

@Component({
  selector: 'app-popupbio',
  templateUrl: './popupbio.component.html',
  styleUrls: ['./popupbio.component.css']
})
export class PopupbioComponent implements OnInit {

  company: Company = a4data.company;

  constructor(public dialogRef: MatDialogRef<AppComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onOK() {this.dialogRef.close();}

  ngOnInit(): void {
  }

}

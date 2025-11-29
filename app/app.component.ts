import { Component } from '@angular/core';
import { Company, Categories, Products } from './a4interface';
import a4data from '../assets/data/A4.json';
import { MatDialog } from '@angular/material/dialog';
import { PopupbioComponent } from 'src/app/popupbio/popupbio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tran62A4';

  constructor (public dialog: MatDialog) {}

  aboutMe() {
    const dialogRef = this.dialog.open(PopupbioComponent, {data: this.company, width: '400px'});
  }
  
  company: Company = a4data.company;
  categories: Categories[] = a4data.categories;
  products: Products[] = a4data.products;

}

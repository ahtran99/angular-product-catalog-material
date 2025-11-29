import { Component, OnInit, Input } from '@angular/core';
import { Products, Categories } from '../a4interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() prodInfo!: Products[];
  @Input() catInfo!: Categories[];

  outArea!: string;

  displayJSON(id : number) {
    this.outArea = `<h4>Product Display for ID: ${id}</h4>`;
    for (let prod of this.prodInfo) {
      if (prod.catid === id) {
        this.outArea +=
        `
         <strong>Product ID</strong>: ${prod.ProductID}<br>
         Name: ${prod.Name}<br>
         Price: $${prod.Price}.00<br>
         Brand: ${prod.Brand} / Color: ${prod.Color}<hr>
        `;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

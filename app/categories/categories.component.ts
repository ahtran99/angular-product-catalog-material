import { Component, OnInit, Input } from '@angular/core';
import { Categories } from '../a4interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() catInfo!: Categories[];

  constructor() { }

  ngOnInit(): void {
  }

}

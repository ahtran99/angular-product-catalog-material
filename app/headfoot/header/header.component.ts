import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/a4interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerInfo!: Company;

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Wish } from 'src/app/datamodel';

@Component({
  selector: 'app-wish-layout',
  templateUrl: './wish-layout.component.html',
  styleUrls: ['./wish-layout.component.css']
})
export class WishLayoutComponent implements OnInit {

 @Input() wish: Wish;

  constructor() { }

  ngOnInit(): void {
  }

}

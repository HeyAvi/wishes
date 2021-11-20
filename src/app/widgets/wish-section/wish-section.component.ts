import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Wish } from 'src/app/datamodel';

@Component({
  selector: 'app-wish-section',
  templateUrl: './wish-section.component.html',
  styleUrls: ['./wish-section.component.css']
})
export class WishSectionComponent implements OnInit {
  @Input() wishes: Wish[];

  constructor() {
  }

  ngOnInit(): void {
  }

}

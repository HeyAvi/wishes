import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Wish } from 'src/app/datamodel';

@Component({
  selector: 'app-wish-section',
  templateUrl: './wish-section.component.html',
  styleUrls: ['./wish-section.component.css']
})
export class WishSectionComponent implements OnInit {
  wishes: any[];

  @ViewChild('noData') myDiv: ElementRef;

  constructor(private db: AngularFireDatabase) {
    db.list('/Wishes').valueChanges().subscribe(wishes => {
      this.wishes = wishes;
    });
  }

  ngOnInit(): void {
  }

}

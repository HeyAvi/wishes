import { Component, OnInit } from '@angular/core';
import { Wish } from 'src/app/datamodel';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  wishes: any[];
  email: string;
  name: string;
  wish: string;

  constructor(private db: AngularFireDatabase) {
    db.list('/Wishes').valueChanges().subscribe(wishes => {
      this.wishes = wishes;
      console.log(this.wishes);
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.email && this.name && this.wish && this.wish.length > 10) {
      let wish = new Wish(this.name, this.email, this.wish);
      console.log(wish);
      this.pushToFirebase(this.db, wish);
      this.email = '';
      this.name = '';
      this.wish = '';
    }

  }

  // typescript custom Function
  // pushToFirebase(db: AngularFireDatabase, wish: Wish) {
  //   db.list('/Wishes').push(wish);
  // }

  pushToFirebase(db: AngularFireDatabase, finalWish: Wish) {
    const itemRef = db.list('/Wishes');
    itemRef.push({
      name: finalWish.name,
      email: finalWish.email,
      wish: finalWish.wish
    });
  }

}

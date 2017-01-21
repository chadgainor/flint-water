import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Cards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/cnn-logo.jpg',
          name: 'CNN'
        },
        date: 'Jan 13, 2016',
        image: 'assets/img/flint-water-tower.jpg',
        content: 'How tap water became toxic in Flint, Michigan',
      },
      {
        user: {
          avatar: 'assets/img/dfp-logo.svg',
          name: 'Detroit Free Press'
        },
        date: 'January 19, 2017',
        image: 'assets/img/1000-days.jpg',
        content: 'Today marks 1,000 days since Flint had clean drinking water'
      },
      {
        user: {
          avatar: 'assets/img/root-logo.png',
          name: 'The Root'
        },
        date: 'January 18, 2017',
        image: 'assets/img/water.jpg',
        content: 'Flint, Mich.’s Water Crisis Continues; Latest Events Prove It’s Far From Over'
      }
    ];

  }
}

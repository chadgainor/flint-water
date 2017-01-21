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
        title: 'How tap water became toxic in Flint, Michigan',
        content: 'Flint, Michigan, lies about 70 miles from the shores of the largest group of fresh water bodies in the world: the Great Lakes. Yet its residents can\'t get clean water from their taps.'
      },
      {
        user: {
          avatar: 'assets/img/dfp-logo.svg',
          name: 'Detroit Free Press'
        },
        date: 'January 19, 2017',
        image: 'assets/img/1000-days.jpg',
        title: 'Today marks 1,000 days since Flint had clean drinking water',
        content: 'One thousand days ago, the city of Flint shut off the tap to the Lake Huron water they had been receiving from the Detroit Water and Sewage Department and began drawing and treating water from the Flint River.'
      },
      {
        user: {
          avatar: 'assets/img/root-logo.png',
          name: 'The Root'
        },
        date: 'January 18, 2017',
        image: 'assets/img/water.jpg',
        title: 'Flint, Mich.’s Water Crisis Continues; Latest Events Prove It’s Far From Over',
        content: 'The people of Flint, Mich., still do not have clean water, and there does not appear to be a definite end in sight to the need for water filters and bottled water for everything from bathing to cooking more than a year after Mayor Karen Weaver called a state of emergency because of elevated lead levels in the city\’s drinking water.'
      }
    ];

  }
}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {
  constructor(public navCtrl: NavController) {

  }


}

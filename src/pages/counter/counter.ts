import { Component } from '@angular/core';

@Component({
  selector: 'page-counter',
  templateUrl: 'counter.html'
})
export class CounterPage {
  //milliseconds: number = 0;
  //seconds: number = 0;
  time_str: string;
  time: any;
  initial: string;
  beginDate = new Date("April 25, 2014 12:00:00");

  ngOnInit() {
    let today = new Date();
    let milliseconds = new Date().getTime() - this.beginDate.getTime();
    let seconds = milliseconds / 1000;
    this.time = this.convertTime(seconds);
  }


  constructor() {
    setInterval(()=>{
              let milliseconds = new Date().getTime() - this.beginDate.getTime();
              let seconds = milliseconds / 1000;
              this.time = this.convertTime(seconds);
    }, 1000);
  }

  /**
    * Converts milliseconds to 'hh:mm:ss' string
    *
    * @param {number} seconds
    * @returns {string}
    */
  convertTime (seconds:  number) {
    let days_str, hours_str, minutes_str, seconds_str: string;
    //let d, h, m, s: string;

    let days = Math.floor(((seconds / 60) / 1440));
    //let hours = Math.floor((seconds % 60) * 24);
    let hours = Math.floor(((seconds % 31536000) % 86400) / 3600);
    //let minutes = Math.floor(hours * 60);
    let minutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    //let sec = Math.floor(minutes * 60);
    let sec = Math.floor(((seconds % 31536000) % 86400) % 3600) % 60;

    //seconds_str = (sec <=9) ? '0' + sec.toString() : sec.toString() ;
    seconds_str = (sec <1) ? '0' : sec.toString() ;
    minutes_str = (minutes <1) ? '0': minutes.toString() ;
    hours_str = (hours <1) ? '0' : hours.toString() ;
    days_str = (days <1) ? '0' : days.toString() ;

    return {d: days_str, h: hours_str, m: minutes_str, s: seconds_str};
  }

}

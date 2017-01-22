import { Component } from '@angular/core';

@Component({
  selector: 'page-counter',
  templateUrl: 'counter.html'
})
export class CounterPage {
  milliseconds: number = 0;
  time_str: string;
  time: any;
  initial: string;

  ngOnInit() {
        //this.milliseconds = parseInt(this.initial);
        this.milliseconds = parseInt("000000");
        this.time = this.convertTime(this.milliseconds);
  }


  constructor() {
    setInterval(()=>{
              this.milliseconds = this.milliseconds + 1000;
              this.time = this.convertTime(this.milliseconds);
    }, 1000);
  }

  /**
    * Converts milliseconds to 'hh:mm:ss' string
    *
    * @param {number} milliseconds
    * @returns {string}
    */
  convertTime (milliseconds:  number) {
    let sec: number = milliseconds / 1000;
    let hours, minutes, seconds: number;
    let hours_str, minutes_str, seconds_str: string;
    let h, m, s: string;

    hours = Math.floor(((sec % 31536000) % 86400) / 3600);
    hours_str = (hours <=9) ? '0' + hours.toString() : hours.toString() ;

    minutes = Math.floor((((sec % 31536000) % 86400) % 3600) / 60);
    minutes_str = (minutes <=9) ? '0' + minutes.toString() : minutes.toString() ;

    seconds = Math.floor(((sec % 31536000) % 86400) % 3600) % 60;
    seconds_str = (seconds <=9) ? '0' + seconds.toString() : seconds.toString() ;

    //return hours_str +':'+ minutes_str +':'+ seconds_str;
    return {h: hours_str, m: minutes_str, s: seconds_str};
  }

}

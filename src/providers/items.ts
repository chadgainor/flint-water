import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Item } from '../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  constructor(public http: Http, public api: Api) {
  }



  query(params?: any){

     this.api.get('news').subscribe( data => {

       let json = data.json();
       //console.log(json['news']['value']),
       let values = json['news']['value'];
       if(values){
         for(let item of values){
          //console.log(item);
          console.log(item['category']);//['thumbnail']['contentUrl']);
          this.items.push(new Item(item));
          }
      }

    });
//console.log(this.items);
return this.items;
};


}

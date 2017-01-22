import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapsLatLng,
    CameraPosition,
    GoogleMapsMarkerOptions,
    GoogleMapsMarker
} from 'ionic-native';

declare var google;

@Component({
  selector: 'map-page',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {

  }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
          // make sure to create following structure in your view.html file
          // and add a height (for example 100%) to it, else the map won't be visible
          // <ion-content>
          //  <div #map id="map" style="height:100%;"></div>
          // </ion-content>

          // create a new map by passing HTMLElement
          let element: HTMLElement = document.getElementById('map');

          // create LatLng object
          let LatLng: GoogleMapsLatLng = new GoogleMapsLatLng(43.0125304, -83.687460);

          var mapOptions = {
              center: LatLng,
              zoom: 12,
              mapTypeId: google.maps.MapTypeId.RoadMAP
          };

          let map = new google.maps.Map(document.getElementById("map"),
              mapOptions);


          var mylatLng = new google.maps.LatLng(42.7370, -84.4839);

          var marker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: mylatLng,
              icon: 'http://i.imgur.com/fDUI8bZ.png'
          });

          var rossplaza = new google.maps.LatLng(43.061717, -83.73107499999998);

          var rossplazamarker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: rossplaza,
              icon: 'http://i.imgur.com/fDUI8bZ.png',
              label: 'Ross Plaza'
          });

          var stmark = new google.maps.LatLng(43.0434399, -83.71287799999999);

          var stmarkmarker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: stmark,
              icon: 'http://i.imgur.com/fDUI8bZ.png',
              label: 'St. Mark Missionary Baptist Church'
          });

          var mtcalvary = new google.maps.LatLng(43.0583172, -83.69386930000002);

          var mtcalvarymarker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: mtcalvary,
              icon: 'http://i.imgur.com/fDUI8bZ.png',
              label: 'Mt. Calvary Missionary Baptist Church'
          });

          var franklin = new google.maps.LatLng(43.040959, -83.66549800000001);

          var franklinmarker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: franklin,
              icon: 'http://i.imgur.com/fDUI8bZ.png',
              label: 'Franklin Avenue Lot'
          });

          var oldflint = new google.maps.LatLng(43.0251251, -83.68513940000003);

          var oldflintmarker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: oldflint,
              icon: 'http://i.imgur.com/fDUI8bZ.png',
              label: 'Old Flint Farmers’ Market'
          });

          var westcourt = new google.maps.LatLng(43.007445, -83.72826599999996);

          var westcourtmarker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: westcourt,
              icon: 'http://i.imgur.com/fDUI8bZ.png',
              label: 'West Court Street Church of God'
          });

          var dortfederal = new google.maps.LatLng(43.0110622, -83.64217099999996);

          var dortfederalmarker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: dortfederal,
              icon: 'http://i.imgur.com/fDUI8bZ.png',
              label: 'Dort Federal Event Center'
          });

          var lincolnpark = new google.maps.LatLng(42.97733900000001, -83.69327399999997);

          var lincolnparkmarker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: lincolnpark,
              icon: 'http://i.imgur.com/fDUI8bZ.png',
              label: 'Lincoln Park United Methodist Church'
          });

          var eastown = new google.maps.LatLng(42.995393, -83.65267799999998);

          var eastownmarker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: eastown,
              icon: 'http://i.imgur.com/fDUI8bZ.png',
              label: 'Eastown Bowl Bowling Alley'
          });
    }
  }

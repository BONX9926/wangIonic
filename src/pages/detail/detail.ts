import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  map: GoogleMap;
  wang:any;
  images:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wang = this.navParams.get('item')
    this.images = this.wang.images
  }

  ionViewDidLoad(){
   this.loadMap();
  }
  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: this.wang.lat,
           lng: this.wang.lng
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: this.wang.title,
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: this.wang.lat,
        lng: this.wang.lng
      },
    });
  }
}

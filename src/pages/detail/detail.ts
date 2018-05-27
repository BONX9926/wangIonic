import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

declare var google:any;

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  // @ViewChild('map') mapRef: ElementRef;
  map: GoogleMap;
  // map:any;
  wang:any;
  images:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wang = this.navParams.get('item')
    this.images = this.wang.images
  }

  ionViewDidLoad(){
  //  this.showMap()
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
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.wang.lat,
        lng: this.wang.lng
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }
  // showMap() {
  //   const location = new google.maps.LatLng(this.wang.lat, this.wang.lng);
  //   const option = {
  //     center: location,
  //     zoom: 15,
  //     streetViewControl: false,
  //     mapTypeId: 'terrain'
  //   };
  //   this.map = new google.maps.Map(this.mapRef.nativeElement, option);
  //   this.addMarker(location, this.map);
  // }

  // addMarker(position, map){
  //   return new google.maps.Marker({
  //     position,
  //     map
  //   });
  // }

}

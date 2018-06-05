import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google:any;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {

 
    var myLatLng = {lat: 13.7500301, lng: 100.4890995};

    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: myLatLng
    });

    const lo1 = {lat:13.7500301,lng:100.4890995};
    const lo2 = {lat:13.7500301,lng:100.4890995};
    const lo3 = {lat:13.7500301,lng:100.4890995};
    const lo4 = {lat:13.7500301,lng:100.4890995};
    const lo5 = {lat:13.7500301,lng:100.4890995};
    const lo6 = {lat:13.7500301,lng:100.4890995};
    const lo7 = {lat:13.7500301,lng:100.4890995};
    const lo8 = {lat:13.7500301,lng:100.4890995};
    const lo9 = {lat:13.7500301,lng:100.4890995};
    const l10 = {lat:13.7500301,lng:100.4890995};
    const l11 = {lat:13.7500301,lng:100.4890995};
    const l12 = {lat:13.7500301,lng:100.4890995};
    const l13 = {lat:13.7500301,lng:100.4890995};
    const l14 = {lat:13.7500301,lng:100.4890995};
    const l15 = {lat:13.7500301,lng:100.4890995};
    const l16 = {lat:13.7500301,lng:100.4890995};
    const l17 = {lat:13.7500301,lng:100.4890995};
    const l18 = {lat:13.7500301,lng:100.4890995};
    const l19 = {lat:13.7500301,lng:100.4890995};
    // this.addMarker(lo1, this.map, 'test')
  


    var marker = new google.maps.Marker({
      position: lo1,
      map: this.map,
      title: '444444'
    });

    this.addMark(marker, 'text', this.map)
  }
  addMark(marker, text, map) {
    let infowindow = new google.maps.InfoWindow({
      content: text
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }


}

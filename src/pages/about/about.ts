import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

declare var google:any;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = '13.7500301,100.4890995';
  end = '13.7500301,100.4890995';
  mode = 'DRIVING';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 10,
      center: {lat: 13.7500301, lng: 100.4890995}
    });

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(document.getElementById('right-panel'));
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: this.mode
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        // window.alert('Directions request failed due to ' + status);
        const alert = this.alertCtrl.create({
          title: 'Not Found!',
          subTitle: 'ไม่พบเส้นทาง',
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }

}

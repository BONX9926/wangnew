import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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
  startlat: any;
  endlng: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private geolocation: Geolocation) {

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
  ionViewWillEnter(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      }).catch((error) => {
        console.log('Error getting location', error);
      });
      
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      this.startlat = data.coords.latitude
      this.endlng = data.coords.longitude

      });
    
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

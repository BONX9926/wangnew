import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

declare var google:any;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  items: Array<any>;
  constructor(public navCtrl: NavController, public Api: ApiProvider) {
    this.initializeItems()
  }

  initializeItems() {
    this.Api.getWang().then( (data: any) => {
      this.items = data;
    }).then(() => {
      this.initMap();
    })
  }

  initMap() {
    let lat = this.items[0].lat*1
    let lng = this.items[0].lng*1
    var myLatLng = {lat: lat, lng: lng}
    
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: myLatLng
    })

    this.items.forEach( (el,i) => {
      var lo = {lat:el.lat*1,lng:el.lng*1}
      var marker = new google.maps.Marker({
        position: lo,
        map: this.map,
        title: el.title
      })

      this.addMark(marker, this.map)
    })
  }

  addMark(marker, map) {
    let infowindow = new google.maps.InfoWindow({
      content: marker.title
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }


}

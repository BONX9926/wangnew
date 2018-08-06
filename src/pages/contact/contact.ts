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
    const lo2 = {lat:13.7500299,lng:100.4825334};
    const lo3 = {lat:13.7757799,lng:100.4980087};
    const lo4 = {lat:13.7570678,lng:100.4843034};
    const lo5 = {lat:13.7526495,lng:100.4870796};
    const lo6 = {lat:13.7468985,lng:100.4893578};
    const lo7 = {lat:13.7459022,lng:100.4944807};
    const lo8 = {lat:13.7579843,lng:100.5112676};
    const lo9 = {lat:13.7504499,lng:100.4921814};
    const l10 = {lat:13.7435651,lng:100.4945436};
    const l11 = {lat:13.7526412,lng:100.4972033};
    const l12 = {lat:13.7684579,lng:100.4974962};
    const l13 = {lat:13.7765053,lng:100.5005320};
    const l14 = {lat:13.7769632,lng:100.5065958};
    const l15 = {lat:13.7686261,lng:100.5329005};
    const l16 = {lat:13.7706389,lng:100.5022800};
    const l17 = {lat:13.7675566,lng:100.5081755};
    const l18 = {lat:13.7680542,lng:100.5081755};
    const l19 = {lat:13.0653190,lng:100.2616631};
    const l20 = {lat:13.7556527,lng:100.5107040};
    const l21 = {lat:13.7678970,lng:100.5009637};
    const l22 = {lat:13.7211939,lng:100.5515219};
    const l23 = {lat:13.7568933,lng:100.5354011};
    const l24 = {lat:13.7482025,lng:100.5310779};
  
    var marker1 = new google.maps.Marker({
      position: lo1,
      map: this.map,
      title: 'พระบรมมหาราชวัง'
    });
    var marker2 = new google.maps.Marker({
      position: lo2,
      map: this.map,
      title: 'พระราชวังเดิม'
    });
    var marker3 = new google.maps.Marker({
      position: lo3,
      map: this.map,
      title: 'พระราชวังบวรสถานมงคล(วังหน้า)'
    });
    var marker4 = new google.maps.Marker({
      position: lo4,
      map: this.map,
      title: 'พระราชวังบวรสถานภิมุข(วังหลัง)'
    });
    var marker5 = new google.maps.Marker({
      position: lo5,
      map: this.map,
      title: 'วังท่าพระ'
    });
    var marker6 = new google.maps.Marker({
      position: lo6,
      map: this.map,
      title: 'วังริมวัดโพธิ์'
    });
    var marker7 = new google.maps.Marker({
      position: lo7,
      map: this.map,
      title: 'วังบ้านหม้อ'
    });
    var marker8 = new google.maps.Marker({
      position: lo8,
      map: this.map,
      title: 'วังริมคลองบางลำพู'
    });
    var marker9 = new google.maps.Marker({
      position: lo9,
      map: this.map,
      title: 'พระราชวังสราญรมย์'
    });
    var marker10 = new google.maps.Marker({
      position: l10,
      map: this.map,
      title: 'วังบูรพาภิรมย์'
    });
    var marker11 = new google.maps.Marker({
      position: l11,
      map: this.map,
      title: 'วังกรมพระนราธิปประพันธ์พงศ์'
    });
    var marker12 = new google.maps.Marker({
      position: l12,
      map: this.map,
      title: 'วังบางขุนพรหม'
    });
    var marker13 = new google.maps.Marker({
      position: l13,
      map: this.map,
      title: 'พระราชวังดุสิต'
    });
    var marker14 = new google.maps.Marker({
      position: l14,
      map: this.map,
      title: 'สวนสุนันทา'
    });
    var marker15 = new google.maps.Marker({
      position: l15,
      map: this.map,
      title: 'พระราชวังพญาไท'
    });
    var marker16 = new google.maps.Marker({
      position: l16,
      map: this.map,
      title: 'วังนางเลิ้ง'
    });
    var marker17 = new google.maps.Marker({
      position: l17,
      map: this.map,
      title: 'ตำหนักจิตรลดาวังปารุสกวัน'
    });
    var marker18 = new google.maps.Marker({
      position: l18,
      map: this.map,
      title: 'วังปารุสกวัน'
    });
    var marker19 = new google.maps.Marker({
      position: l19,
      map: this.map,
      title: 'วังจันทรเกษม'
    });
    var marker20 = new google.maps.Marker({
      position: l20,
      map: this.map,
      title: 'วังวรดิศ'
    });
    var marker21 = new google.maps.Marker({
      position: l21,
      map: this.map,
      title: 'วังเทวะเวสม์'
    });
    var marker22 = new google.maps.Marker({
      position: l22,
      map: this.map,
      title: 'ตำหนักปลายเนิน'
    });
    var marker23 = new google.maps.Marker({
      position: l23,
      map: this.map,
      title: 'วังสวนผักกาด'
    });
    var marker24 = new google.maps.Marker({
      position: l24,
      map: this.map,
      title: 'วังสระปทุม'
    });

    this.addMark(marker1, this.map)
    this.addMark(marker2, this.map)
    this.addMark(marker3, this.map)
    this.addMark(marker4, this.map)
    this.addMark(marker5, this.map)
    this.addMark(marker6, this.map)
    this.addMark(marker7, this.map)
    this.addMark(marker8, this.map)
    this.addMark(marker9, this.map)
    this.addMark(marker10, this.map)
    this.addMark(marker11, this.map)
    this.addMark(marker12, this.map)
    this.addMark(marker13, this.map)
    this.addMark(marker14, this.map)
    this.addMark(marker15, this.map)
    this.addMark(marker16, this.map)
    this.addMark(marker17, this.map)
    this.addMark(marker18, this.map)
    this.addMark(marker19, this.map)
    this.addMark(marker20, this.map)
    this.addMark(marker21, this.map)
    this.addMark(marker22, this.map)
    this.addMark(marker23, this.map)
    this.addMark(marker24, this.map)
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

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  wang:any;
  images:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private launchNavigator: LaunchNavigator
  ) {
    this.wang = this.navParams.get('item')
    this.images = this.wang.images
    
  }
  
  navigator_method(lat,lng){
    //ใช้ในการนำทางจากปุ่ม
    this.launchNavigator.navigate([lat, lng])
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }
}

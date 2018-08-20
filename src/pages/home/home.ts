import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { DetailPage } from '../detail/detail';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array<any>;
  selectedWang: Array<any>;
  wangFound: Boolean;
  _item: Array<any>;
  constructor(
    public navCtrl: NavController,
    public Api: ApiProvider,
    private barcodeScanner: BarcodeScanner,
    private alertCtrl: AlertController
  ) {

    this.initializeItems();
  }

  initializeItems() {
    this.Api.getWang().then( (data: any) => {
      this.items = data;
    }) 
  }

  getItems(ev: any) {

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.indexOf(val) > -1);
      })
    } else {
      this.initializeItems();
    }
  }

  goToOtherPage(_item) {
    this.navCtrl.push(DetailPage, { item: _item })
  }

  scanCode() {
  this.barcodeScanner.scan().then((barcodeData) => {
    this.selectedWang = this.items.find(wang => wang.api_id === barcodeData.text);
    if(this.selectedWang !== undefined) {
      this.wangFound = true;
      this.navCtrl.push(DetailPage, { item: this.selectedWang })
    } else {
      // this.wangFound = false;
      const alert = this.alertCtrl.create({
        title: 'Not Found!',
        subTitle: 'ไม่พบข้อมูล',
        buttons: ['OK']
      });
      alert.present();
    }
  }, (err) => {

  });
  }
}

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  constructor(public http: Http) {
    this.getWang();
  }
  getWang() {
    return new Promise( (resolve,reject) => {
      this.http.get('http://nisakorn.com/student/chanika/index.php/api/getwang')
      .map(res => res.json())
      .subscribe((data: any) => {
        resolve(data)
      }, error => {
        reject(error)
      })
    })
  }
}

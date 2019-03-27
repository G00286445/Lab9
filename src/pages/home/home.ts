import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
myStatus: string;
  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  changePage() {
    this.navCtrl.push("StatusPage");
  }

  ionViewWillEnter(){
    this.storage.get("myStatus").then((data) => {
      this.myStatus = data;
    })
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  
  
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  logout() {
    this.app.getRootNav().setRoot('LoginPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}

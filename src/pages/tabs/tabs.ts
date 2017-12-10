import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
//added 3 new tabroots
//added 2 new pages
export class TabsPage {
  tab1Root='CvPage';
  tab2Root='HomePage';
  tab3Root='SoftskillPage';
  tab4Root='ProjectPage';
  tab5Root='TeamprojectPage';
  tab6Root='ExtraCurriculumPage';
  tab7Root='ContactPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

} 
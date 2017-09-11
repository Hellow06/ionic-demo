import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-persons',
  templateUrl: 'persons.html',
})
export class PersonsPage {

  nom:string;
  prenom:string;
  twitter:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nom = this.navParams.get("nom");
    this.prenom = this.navParams.get("prenom");
    this.twitter = this.navParams.get("twitter");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonsPage');
  }

}

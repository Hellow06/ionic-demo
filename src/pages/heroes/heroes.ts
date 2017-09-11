import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hero } from "../../models/Hero";

/**
 * Generated class for the HeroesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroes',
  templateUrl: 'heroes.html',
})
export class HeroesPage {
  public heros: Array<Hero> = new Array<Hero>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.heros.push({id : 1, power : "left hand", name : "Batou", imageUrl : "../assets/images/batman.jpg"});
    this.heros.push({id : 2, power : "stronger", name : "Superman", imageUrl : "../assets/images/superman.png"});
    this.heros.push({id : 3, power : "It's just Ironman. What else ?", name : "Ironman", imageUrl : "../assets/images/ironman.png"});
    this.heros.push({id : 4, power : "Moi", name : "PasDeBolMan", imageUrl : "../assets/images/pasdebolman.jpg"});
  }

  itemSelected(item){
    this.navCtrl.push("HeroDetailsPage", {id : item.id});
  }

}

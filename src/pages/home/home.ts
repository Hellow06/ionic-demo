import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonsPage } from "../persons/persons";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public pushPage = "HeroesPage";
  tabPersons:Array<any> = [
    {
      nom : "Albino",
      prenom : "Julian",
      twitter : "500k"
    },
    {
      nom : "Pesce",
      prenom : "Flavien",
      twitter : "50k"
    },
    {
      nom : "Perez",
      prenom : "Begoña",
      twitter : "2M"
    },
    {
      nom : "Salvadore",
      prenom : "Tom",
      twitter : "1M"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  goToPerson(person){
    this.navCtrl.push(PersonsPage, person);
  }

}

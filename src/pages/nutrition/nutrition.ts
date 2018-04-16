import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheeseLasagnaPage } from '../cheese-lasagna/cheese-lasagna';

@Component({
  selector: 'page-nutrition',
  templateUrl: 'nutrition.html'
})
export class NutritionPage {

  constructor(public navCtrl: NavController) {
  }
  goToCheeseLasagna(params){
    if (!params) params = {};
    this.navCtrl.push(CheeseLasagnaPage);
  }
}

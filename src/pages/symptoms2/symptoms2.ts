import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SymptomsPage } from '../symptoms/symptoms';

@Component({
  selector: 'page-symptoms2',
  templateUrl: 'symptoms2.html'
})
export class Symptoms2Page {

  constructor(public navCtrl: NavController) {
  }
  goToSymptoms(params){
    if (!params) params = {};
    this.navCtrl.push(SymptomsPage);
  }
}

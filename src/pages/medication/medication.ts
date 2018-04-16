import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Medication2Page } from '../medication2/medication2';

@Component({
  selector: 'page-medication',
  templateUrl: 'medication.html'
})
export class MedicationPage {

  constructor(public navCtrl: NavController) {
  }
  goToMedication2(params){
    if (!params) params = {};
    this.navCtrl.push(Medication2Page);
  }
}

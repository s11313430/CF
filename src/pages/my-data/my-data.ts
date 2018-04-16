import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Prescription2Page } from '../prescription2/prescription2';
import { PrescriptionPage } from '../prescription/prescription';
import { Symptoms2Page } from '../symptoms2/symptoms2';
import { SymptomsPage } from '../symptoms/symptoms';

@Component({
  selector: 'page-my-data',
  templateUrl: 'my-data.html'
})
export class MyDataPage {

  constructor(public navCtrl: NavController) {
  }
  goToPrescription2(params){
    if (!params) params = {};
    this.navCtrl.push(Prescription2Page);
  }goToPrescription(params){
    if (!params) params = {};
    this.navCtrl.push(PrescriptionPage);
  }goToSymptoms2(params){
    if (!params) params = {};
    this.navCtrl.push(Symptoms2Page);
  }goToSymptoms(params){
    if (!params) params = {};
    this.navCtrl.push(SymptomsPage);
  }
}

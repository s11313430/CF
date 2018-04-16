import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrescriptionPage } from '../prescription/prescription';

@Component({
  selector: 'page-prescription2',
  templateUrl: 'prescription2.html'
})
export class Prescription2Page {

  constructor(public navCtrl: NavController) {
  }
  goToPrescription(params){
    if (!params) params = {};
    this.navCtrl.push(PrescriptionPage);
  }
}

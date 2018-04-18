import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Medication2Page } from '../medication2/medication2';

@Component({
  selector: 'page-medication',
  templateUrl: 'medication.html'
})
export class MedicationPage {

  public medNameHTML ;
  public dosageHTML ; 
  
  constructor(public navCtrl: NavController) {
  }
  goToMedication2(params){
    if (!params) params = {};
    this.navCtrl.push(Medication2Page);
  }

  ngAfterViewInit() {
    let gotItem ;
    gotItem = localStorage.getItem('medicine');

    gotItem =  JSON.parse(gotItem);

    console.log(gotItem.docname);

    this.medNameHTML = gotItem.medname;
    this.dosageHTML = gotItem.dosage;
  }

}

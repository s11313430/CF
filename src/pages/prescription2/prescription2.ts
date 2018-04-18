import { Component,ViewChild ,ElementRef  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrescriptionPage } from '../prescription/prescription';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-prescription2',
  templateUrl: 'prescription2.html'
})
export class Prescription2Page {

  public doctorName;
  public visitDateTime;
  public clinic;
  public dosage;


  constructor(public navCtrl: NavController) {
  }
  goToPrescription(params){
    if (!params) params = {};
    this.navCtrl.push(PrescriptionPage);
  }

  ngAfterViewInit() {
    let gotItem ;
    gotItem = localStorage.getItem('prescription');

    gotItem =  JSON.parse(gotItem);

    this.doctorName = gotItem.doctorname;
    this.visitDateTime = gotItem.doctortime;
    this.clinic = gotItem.clinicshown;
    this.dosage = gotItem.dosage;

  }



}

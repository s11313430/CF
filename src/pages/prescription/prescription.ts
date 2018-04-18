import { Component, ViewChild ,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-prescription',
  templateUrl: 'prescription.html'
})
export class PrescriptionPage {

  @ViewChild('docName') docName: ElementRef;
  @ViewChild('docTime') docTime: ElementRef;
  @ViewChild('clinic') clinic: ElementRef;
  @ViewChild('dosage') dosage: ElementRef;
  

  public goToMain(params){
    if (!params) params = {};
    this.navCtrl.push(MainPage);
  }

  constructor(public navCtrl: NavController) {
  }

  addPrescription(){
    let docNameStorage = this.docName.nativeElement.value;
    let docTimeStorage = this.docTime.nativeElement.value;
    let clinicStorage = this.clinic.nativeElement.value;
    let dosageStorage = this.dosage.nativeElement.value;

    var prescriptionObject = {docname:docNameStorage, doctortime:docTimeStorage, clinicshown:clinicStorage, dosage:dosageStorage};
  
    localStorage.setItem('prescription', JSON.stringify(prescriptionObject) );
    
    this.goToMain(PrescriptionPage);

  }
  
}

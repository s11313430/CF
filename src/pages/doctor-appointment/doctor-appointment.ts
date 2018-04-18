import { Component,ViewChild ,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
@Component({
  selector: 'page-doctor-appointment',
  templateUrl: 'doctor-appointment.html'
})
export class DoctorAppointmentPage {

  constructor(public navCtrl: NavController) {
  }

  @ViewChild('docName') docName: ElementRef;
  @ViewChild('docTime') docTime: ElementRef;
  @ViewChild('clinic') clinic: ElementRef;

  public goToMain(params){
    if (!params) params = {};
    this.navCtrl.push(MainPage);
  }

  addDocVisit(){
    let docName = this.docName.nativeElement.value;
    let docTime = this.docTime.nativeElement.value;
    let clinic = this.clinic.nativeElement.value;

    var clinicObject = {docname:docName, datetime:docTime, clinic:clinic};
  
    localStorage.setItem('appointment', JSON.stringify(clinicObject) );
    
    this.goToMain(DoctorAppointmentPage);

  }
  
}

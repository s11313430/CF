import { Component, ViewChild ,ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { DoctorAppointmentPage } from '../doctor-appointment/doctor-appointment';

@Component({
  selector: 'page-doctors-appointment',
  templateUrl: 'doctors-appointment.html'
})
export class DoctorsAppointmentPage {

  public docName;
  public dateTime;
  public clinic;

  constructor(public navCtrl: NavController) {
  }
  goToDoctorAppointment(params){
    if (!params) params = {};
    this.navCtrl.push(DoctorAppointmentPage);
  }

  ngAfterViewInit() {
    let gotItem ;
    gotItem = localStorage.getItem('appointment');

    gotItem =  JSON.parse(gotItem);

    console.log(gotItem.docname);

    this.docName = gotItem.docname;
    this.dateTime = gotItem.datetime;
    this.clinic = gotItem.clinic;
  }

}

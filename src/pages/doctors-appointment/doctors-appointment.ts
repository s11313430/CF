import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DoctorAppointmentPage } from '../doctor-appointment/doctor-appointment';

@Component({
  selector: 'page-doctors-appointment',
  templateUrl: 'doctors-appointment.html'
})
export class DoctorsAppointmentPage {

  constructor(public navCtrl: NavController) {
  }
  goToDoctorAppointment(params){
    if (!params) params = {};
    this.navCtrl.push(DoctorAppointmentPage);
  }
}

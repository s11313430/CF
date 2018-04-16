import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NutritionPage } from '../nutrition/nutrition';
import { CheeseLasagnaPage } from '../cheese-lasagna/cheese-lasagna';
import { DoctorsAppointmentPage } from '../doctors-appointment/doctors-appointment';
import { DoctorAppointmentPage } from '../doctor-appointment/doctor-appointment';
import { MyDataPage } from '../my-data/my-data';
import { Prescription2Page } from '../prescription2/prescription2';
import { PrescriptionPage } from '../prescription/prescription';
import { Symptoms2Page } from '../symptoms2/symptoms2';
import { SymptomsPage } from '../symptoms/symptoms';
import { InformationPage } from '../information/information';
import { MedicationPage } from '../medication/medication';
import { Medication2Page } from '../medication2/medication2';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2Page {

  constructor(public navCtrl: NavController) {
  }
  goToNutrition(params){
    if (!params) params = {};
    this.navCtrl.push(NutritionPage);
  }goToCheeseLasagna(params){
    if (!params) params = {};
    this.navCtrl.push(CheeseLasagnaPage);
  }goToDoctorsAppointment(params){
    if (!params) params = {};
    this.navCtrl.push(DoctorsAppointmentPage);
  }goToDoctorAppointment(params){
    if (!params) params = {};
    this.navCtrl.push(DoctorAppointmentPage);
  }goToMyData(params){
    if (!params) params = {};
    this.navCtrl.push(MyDataPage);
  }goToPrescription2(params){
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
  }goToInformation(params){
    if (!params) params = {};
    this.navCtrl.push(InformationPage);
  }goToMedication(params){
    if (!params) params = {};
    this.navCtrl.push(MedicationPage);
  }goToMedication2(params){
    if (!params) params = {};
    this.navCtrl.push(Medication2Page);
  }
}

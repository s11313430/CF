import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { NutritionPage } from '../pages/nutrition/nutrition';
import { MedicationPage } from '../pages/medication/medication';
import { DoctorsAppointmentPage } from '../pages/doctors-appointment/doctors-appointment';
import { MyDataPage } from '../pages/my-data/my-data';
import { InformationPage } from '../pages/information/information';
import { Medication2Page } from '../pages/medication2/medication2';
import { DoctorAppointmentPage } from '../pages/doctor-appointment/doctor-appointment';
import { PrescriptionPage } from '../pages/prescription/prescription';
import { SymptomsPage } from '../pages/symptoms/symptoms';
import { CheeseLasagnaPage } from '../pages/cheese-lasagna/cheese-lasagna';
import { Prescription2Page } from '../pages/prescription2/prescription2';
import { Symptoms2Page } from '../pages/symptoms2/symptoms2';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    NutritionPage,
    MedicationPage,
    DoctorsAppointmentPage,
    MyDataPage,
    InformationPage,
    Medication2Page,
    DoctorAppointmentPage,
    PrescriptionPage,
    SymptomsPage,
    CheeseLasagnaPage,
    Prescription2Page,
    Symptoms2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    NutritionPage,
    MedicationPage,
    DoctorsAppointmentPage,
    MyDataPage,
    InformationPage,
    Medication2Page,
    DoctorAppointmentPage,
    PrescriptionPage,
    SymptomsPage,
    CheeseLasagnaPage,
    Prescription2Page,
    Symptoms2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
import { Component, ViewChild ,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-symptoms',
  templateUrl: 'symptoms.html'
})
export class SymptomsPage {

  @ViewChild('symptomDateTime') symptomDateTime: ElementRef;
  @ViewChild('symptom') symptom: ElementRef;

  public goToMain(params){
    if (!params) params = {};
    this.navCtrl.push(MainPage);
  }

  constructor(public navCtrl: NavController) {
  }

  addSymptom(){
    let symptomDateTimeStorage = this.symptomDateTime.nativeElement.value;
    let symptomStorage = this.symptom.nativeElement.value;

    var symptomsObject = {symptomdatetime:symptomDateTimeStorage, symptom:symptomStorage};
  
    localStorage.setItem('symptoms', JSON.stringify(symptomsObject) );
    
    this.goToMain(SymptomsPage);

  }
  
}

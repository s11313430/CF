import { Component,ViewChild ,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Time } from '@angular/common';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-medication2',
  templateUrl: 'medication2.html'
})
export class Medication2Page {
  
  constructor(public navCtrl: NavController) {
  }

  @ViewChild('medName') medName: ElementRef;
  @ViewChild('Dosage') Dosage: ElementRef;

  public goToMain(params){
    if (!params) params = {};
    this.navCtrl.push(MainPage);
  }

 

  addMedicines(){
    let medName = this.medName.nativeElement.value;
    let dosage = this.Dosage.nativeElement.value;

    var medObject = {medname:medName, dosage:dosage};
  
    localStorage.setItem('medicine', JSON.stringify(medObject) );

    this.goToMain(Medication2Page);

  }
  

  
}

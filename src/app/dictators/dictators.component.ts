import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dictator } from './classes/dictator';

@Component({
  selector: 'app-dictators',
  templateUrl: './dictators.component.html',
  styleUrls: ['./dictators.component.css']
})

export class DictatorsComponent implements OnInit {

  @Input()
  dictators: typeof Dictator = [];
  
  id:number = 0;
  firstNameInput: string = "";
  lastNameInput: string = "";
  birthYearInput: number = 0;
  deathYearInput: number = 0;
  descriptionInput: string = "";

  constructor() { }
  
  ngOnInit(): void { }

  addDictator(firstNameInput: string, lastNameInput: string, birthYearInput: number, deathYearInput: number, descriptionInput: string){
    let newDictator = {
      firstName:firstNameInput, 
      lastName:lastNameInput, 
      birthYear:birthYearInput, 
      deathYear:deathYearInput, 
      description:descriptionInput
    }

    this.dictators.push(newDictator);
  }

  deleteDictator(index: number){
    this.dictators.splice(index, 1);
  }

}

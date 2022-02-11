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
    this.id = 0;

    for (let index = 0; index < this.dictators.length; index++) {
      this.id++;
    }
    
    this.id++;
    console.log(this.id);

    let newDictator = {id:this.id, firstName:firstNameInput, lastName:lastNameInput, birthYear:birthYearInput, deathYear:deathYearInput, description:descriptionInput}
    this.dictators.push(newDictator);
  }

  deleteDictator(id: number){
    console.log(id);
  }

}

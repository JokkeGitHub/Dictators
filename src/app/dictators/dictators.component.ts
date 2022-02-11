import { Component, OnInit } from '@angular/core';
import { Dictator } from './classes/dictator';

@Component({
  selector: 'app-dictators',
  templateUrl: './dictators.component.html',
  styleUrls: ['./dictators.component.css']
})

export class DictatorsComponent implements OnInit {

  title: string = "Dictators";
  dictators = Dictator;

  //dictators: Dictator[] = [];
  
  deleteDictator(id: number){
    
  }

  constructor() { }

  ngOnInit(): void {
    /*
    this.dictators[0].id = 1;
    this.dictators[0].firstName = 'hans';
    this.dictators[0].lastName = 'bob';
    this.dictators[0].birthYear = 1191;
    this.dictators[0].deathYear = 1112;
    this.dictators[0].description = 'ohoy';
    */
  }

}

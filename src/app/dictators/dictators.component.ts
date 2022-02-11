import { Component, OnInit, Input } from '@angular/core';
import { Dictator } from './classes/dictator';

@Component({
  selector: 'app-dictators',
  templateUrl: './dictators.component.html',
  styleUrls: ['./dictators.component.css']
})

export class DictatorsComponent implements OnInit {

  @Input()
  dictators: typeof Dictator = [];
  
  constructor() { }
  
  ngOnInit(): void { }

  deleteDictator(id: number){
    console.log(id);
  }

}

import { Component, OnInit } from '@angular/core';
import { Dictator } from './classes/dictator';

@Component({
  selector: 'app-dictators',
  templateUrl: './dictators.component.html',
  styleUrls: ['./dictators.component.css']
})

export class DictatorsComponent implements OnInit {

  dictator: Dictator[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}

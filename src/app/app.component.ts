import { Component } from '@angular/core';
import { Dictator } from './dictators/classes/dictator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Dictators";
  dictatorList = Dictator;
}

import {Component, input, OnChanges, SimpleChanges} from '@angular/core';
//import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
})
export class Title implements OnChanges{
    titleC=input.required<string>();
    ngOnChanges(changes:SimpleChanges){
      for(const inputName in changes){
        const inputValues=changes[inputName];
        console.log(`Previus ${inputName} ==  ${inputValues.previousValue}`)
        console.log(`Current ${inputName} ==  ${inputValues.currentValue}`)
        console.log(`Current Value: ${inputValues.currentValue}`)
      }
    }
}

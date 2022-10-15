import { Injectable } from '@angular/core';

import { KaijuService } from './kaiju.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  public unit!: string;
  public convertedHeight!: number;
  public input!: number;
  public inputIntoMonsterVariable!: number;
  public monsterIntoInputVariable!: number;
  public displayResults: boolean = false;

  public units = [
    'millimeters', 'centimeters', 'kilometers', 'inches', 'feet', 'yards', 'miles', 'nautical miles'
  ];

  public convertMonsterHeight(unit: string, kaijuHeight: number){
    if(unit === 'inches'){
      this.displayResults = true;
      return kaijuHeight * 39.3701;
    } else if (unit === 'feet'){
      this.displayResults = true;
      return kaijuHeight * 3.28084;
    } else if (unit === 'yards'){
      this.displayResults = true;
      return kaijuHeight * 1.09361;
    } else if (unit === 'miles'){
      this.displayResults = true;
      return kaijuHeight * .000621371;
    } else if (unit === 'nautical miles'){
      this.displayResults = true;
      return kaijuHeight * .000539957;
    } else if (unit === 'millimeters'){
      this.displayResults = true;
      return kaijuHeight * 1000;
    } else if (unit === 'centimeters'){
      this.displayResults = true;
      return kaijuHeight * 100;
    } else if (unit === 'kilometers'){
      this.displayResults = true;
      return kaijuHeight * .001;
    } else {
      // need to refactor so this isn't necessary
      this.displayResults = false;
      return 0;
    }
  }

  public set inputIntoMonster(convertedHeight: number){
    this.inputIntoMonsterVariable = this.input / convertedHeight;
  }

  public set monsterIntoInput(convertedHeight: number){
    this.monsterIntoInputVariable = convertedHeight / this.input;
  }

  public set setInputValue(input: number){
    this.input = input;
  }

  public set unitChoice(unit: string){
    this.unit = unit;
  }
}

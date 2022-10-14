import { Injectable, Input } from '@angular/core';
import { KaijuService } from './kaiju.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  units = [
    'millimeters', 'centimeters', 'kilometers', 'inches', 'feet', 'yards', 'miles', 'nautical miles'
  ];

  unit: string = '';
  input: number = 0;
  convertedKaijuHeightResult: number = 0;
  convertedHeight: number = 0;
  inputIntoMonsterVariable: number = 0;
  monsterIntoInputVariable: number = 0;
  displayResults: boolean = false;

  constructor(private kaijuService: KaijuService) { }

  

  public convertMonsterHeight(input: number, unit: string, kaijuHeight: number){
    if(unit === 'inches'){
      this.displayResults = true;
      return input / (kaijuHeight * 39.3701);
    } else if (unit === 'feet'){
      this.displayResults = true;
      return input / (kaijuHeight * 3.28084);
    } else if (unit === 'yards'){
      this.displayResults = true;
      return input / (kaijuHeight * 1.09361);
    } else if (unit === 'miles'){
      this.displayResults = true;
      return input / (kaijuHeight * .000621371);
    } else if (unit === 'nautical miles'){
      this.displayResults = true;
      return input / (kaijuHeight * .000539957);
    } else if (unit === 'millimeters'){
      this.displayResults = true;
      return kaijuHeight * 1000;
    } else if (unit === 'centimeters'){
      this.displayResults = true;
      return input / (kaijuHeight * 100);
    } else if (unit === 'kilometers'){
      this.displayResults = true;
      return input / (kaijuHeight * .001);
    } else {
      this.displayResults = false;
      return 0;
    }
  }

  public set setInputValue(input: any){
    this.input = input;
  }

  public set unitChoice(unit: string){
    this.unit = unit;
  }

  public set inputIntoMonster(convertedHeight: number){
    this.inputIntoMonsterVariable = this.input / convertedHeight;
  }

  public set monsterIntoInput(convertedHeight: number){
    this.monsterIntoInputVariable = convertedHeight / this.input;
  }

}

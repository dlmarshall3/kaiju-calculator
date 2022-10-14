import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../shared/calculator.service';
import { KaijuService } from '../shared/kaiju.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  units: string[] = [];
  calculatorInputCheck: string = '';

  constructor(private calculatorService: CalculatorService, private kaijuService: KaijuService) { }

  ngOnInit(): void {
    this.units = this.calculatorService.units;
  }

  public get inputValue(){
    return this.calculatorService.input;
  }

  public get kaijuHeight(): number {
    return this.kaijuService.chosenKaijuHeight;
  }

  onButtonClick(input: number, unit: string){
    // setting the input value in the calculator service
    this.calculatorService.setInputValue = input;
    // setting the unit measurement in the calculator service
    this.calculatorService.unitChoice = unit;
    // determining what the monster's size is in the new unit of measurement
    let convertedKaijuHeight = this.calculatorService.convertMonsterHeight(input, unit, this.kaijuHeight);
    // set input is X monster's
    this.calculatorService.inputIntoMonster = convertedKaijuHeight;
    // set Monster is X units
    this.calculatorService.monsterIntoInput = convertedKaijuHeight;
  }

}

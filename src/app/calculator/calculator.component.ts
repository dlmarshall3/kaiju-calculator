import { Component, OnInit } from '@angular/core';

import { CalculatorService } from '../shared/calculator.service';
import { KaijuService } from '../shared/kaiju.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public units: string[] = [];
  public calculatorInputCheck: string = '';

  constructor(private calculatorService: CalculatorService, private kaijuService: KaijuService) { }

  ngOnInit(): void {
    this.units = this.calculatorService.units;
  }

  public get kaijuHeight(): number {
    return this.kaijuService.selectedKaijuHeight;
  }

  public get inputValue(){
    return this.calculatorService.input;
  }

  public onButtonClick(input: number, unit: string){
    this.calculatorService.setInputValue = input;
    this.calculatorService.unitChoice = unit;
    let convertedKaijuHeight = this.calculatorService.convertKaijuHeight(unit, this.kaijuHeight);
    this.calculatorService.inputIntoKaiju = convertedKaijuHeight;
    this.calculatorService.trimmedInputIntoKaiju = convertedKaijuHeight;
    this.calculatorService.kaijuIntoInput = convertedKaijuHeight;
  }

}

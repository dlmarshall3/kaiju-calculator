import { Component, OnInit } from '@angular/core';

import { CalculatorService } from '../shared/calculator.service';
import { KaijuService } from '../shared/kaiju.service';

@Component({
  selector: 'app-conversion-results',
  templateUrl: './conversion-results.component.html',
  styleUrls: ['./conversion-results.component.css']
})
export class ConversionResultsComponent {

  constructor(private kaijuService: KaijuService, private calculatorService: CalculatorService) { }

  public get inputValueVariable() {
    return this.calculatorService.input;
  }

  public get unitChoiceVariable() {
    return this.calculatorService.unit;
  }

  public get inputIntoKaiju() {
    return this.calculatorService.inputIntoKaijuVariable;
  }

  public get kaijuIntoInput() {
    return this.calculatorService.kaijuIntoInputVariable;
  }

  public get selectedKaiju() {
    return this.kaijuService.selectedKaiju;
  }

  public get trimmedInputIntoKaiju() {
    return this.calculatorService.trimmedInputIntoKaijuVariable;
  }
}

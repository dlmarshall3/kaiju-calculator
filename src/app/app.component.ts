import { Component } from '@angular/core';

import { CalculatorService } from './shared/calculator.service';
import { KaijuService } from './shared/kaiju.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private kaijuService: KaijuService, private calculatorService: CalculatorService) { }
  
  public get selectedKaiju(){
    return this.kaijuService.selectedKaiju;
  }

  public get displayBoolean(){
    return this.calculatorService.displayResults;
  }
}

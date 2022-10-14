import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../shared/calculator.service';
import { KaijuService } from '../shared/kaiju.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private kaijuService: KaijuService, private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  public get selectedKaiju(){
    return this.kaijuService.selectedKaiju;
  }

  public get displayBoolean(){
    return this.calculatorService.displayResults;
  }

  

}

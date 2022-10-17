import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalculatorService } from '../shared/calculator.service';
import { iKaiju } from '../shared/ikaiju';
import { KaijuService } from '../shared/kaiju.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  public godzillaKaiju: iKaiju[] = [];
  public gameraKaiju: iKaiju[] = [];
  public ultramanKaiju: iKaiju[] = [];
  public pacificRimKaiju: iKaiju[] = [];

  constructor(private kaijuService: KaijuService, private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.godzillaKaiju = this.kaijuService.getGodzillaKaiju;
    this.gameraKaiju = this.kaijuService.getGameraKaiju;
    this.ultramanKaiju = this.kaijuService.getUltramanKaiju;
    this.pacificRimKaiju = this.kaijuService.getpacificRimKaiju;
  }

  public get kaijuHeight(): number {
    return this.kaijuService.selectedKaijuHeight;
  }

  public get selectedKaiju(): string {
    return this.kaijuService.selectedKaiju;
  }

  // need to look into refactoring the current kaiju check; could be optimized
  onGodzillaKaijuSelected(name: string){
    if(this.selectedKaiju !== name){
      this.calculatorService.displayResults = false;
    }
    this.kaijuService.selectedKaijuName = name;
    this.kaijuService.selectedKaijuGroup = 'godzilla';
  }

  onGameraKaijuSelected(name: string){
    if(this.selectedKaiju !== name){
      this.calculatorService.displayResults = false;
    }
    this.kaijuService.selectedKaijuName = name;
    this.kaijuService.selectedKaijuGroup = 'gamera';
  }

  onUltramanKaijuSelected(name: string){
    if(this.selectedKaiju !== name){
      this.calculatorService.displayResults = false;
    }
    this.kaijuService.selectedKaijuName = name;
    this.kaijuService.selectedKaijuGroup = 'ultraman';
  }

  onPacificRimKaijuSelected(name: string){
    if(this.selectedKaiju !== name){
      this.calculatorService.displayResults = false;
    }
    this.kaijuService.selectedKaijuName = name;
    this.kaijuService.selectedKaijuGroup = 'pacificRim';
  }
}

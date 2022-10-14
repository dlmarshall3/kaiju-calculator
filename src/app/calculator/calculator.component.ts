import { Component, OnInit } from '@angular/core';
import { KaijuService } from '../shared/kaiju.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(private kaijuService: KaijuService) { }

  ngOnInit(): void {
  }

}

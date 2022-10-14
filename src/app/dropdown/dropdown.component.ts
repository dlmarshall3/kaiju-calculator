import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { iKaiju } from '../shared/ikaiju';
import { KaijuService } from '../shared/kaiju.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  godzillaKaiju: iKaiju[] = [];
  gameraKaiju: iKaiju[] = [];
  ultramanKaiju: iKaiju[] = [];
  pacificRimKaiju: iKaiju[] = [];

  // need to figure out why it takes more than one click
  @ViewChild('offcanvasGodzilla', {static:true}) offcanvasGodzilla!: ElementRef;
  @ViewChild('offcanvasGamera', {static:true}) offcanvasGamera!: ElementRef;
  @ViewChild('offcanvasUltraman', {static:true}) offcanvasUltraman!: ElementRef;
  @ViewChild('offcanvasPacificRim', {static:true}) offcanvasPacificRim!: ElementRef;

  constructor(private kaijuService: KaijuService) { }

  ngOnInit(): void {
    this.godzillaKaiju = this.kaijuService.getGodzillaKaiju;
    this.gameraKaiju = this.kaijuService.getGameraKaiju;
    this.ultramanKaiju = this.kaijuService.getUltramanKaiju;
    this.pacificRimKaiju = this.kaijuService.getpacificRimKaiju;
  }

  onGodzillaMonsterSelected(name: string){
    this.kaijuService.chosenMonsterName = name;
    this.kaijuService.chosenKaijuGroup = 'godzilla';
  }

  onGameraMonsterSelected(name: string){
    this.kaijuService.chosenMonsterName = name;
    this.kaijuService.chosenKaijuGroup = 'gamera';
  }

  onUltramanMonsterSelected(name: string){
    this.kaijuService.chosenMonsterName = name;
    this.kaijuService.chosenKaijuGroup = 'ultraman';
  }

  onPacificRimMonsterSelected(name: string){
    this.kaijuService.chosenMonsterName = name;
    this.kaijuService.chosenKaijuGroup = 'pacificRim';
  }
}

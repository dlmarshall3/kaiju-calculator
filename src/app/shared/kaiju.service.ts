import { Injectable, Input } from '@angular/core';
import { iKaiju } from './ikaiju';

@Injectable({
  providedIn: 'root'
})
export class KaijuService {
  @Input() kaijuHeight: number = 0;
  @Input() selectedKaiju: string = '';
  @Input() kaijuGroup: string = '';

  allKaiju = {
    godzilla: [
      {name: 'Godzilla', height: 50},
      {name: 'Baragon', height: 25}
    ],
    gamera: [
      {name: 'Gamera', height: 50},
      {name: 'Barugon', height: 25}
    ],
    ultraman: [
      {name: 'Bemstar', height: 50},
      {name: 'Alien Zetton', height: 25}
    ],
    pacificRim: [
      {name: 'Knifehead', height: 50},
      {name: 'Onibaba', height: 25}
    ]
  }

  constructor() { }

  public get getGodzillaKaiju(): iKaiju[] {
    return this.allKaiju.godzilla;
  }

  public get getGameraKaiju(): iKaiju[] {
    return this.allKaiju.gamera;
  }

  public get getUltramanKaiju(): iKaiju[] {
    return this.allKaiju.ultraman;
  }

  public get getpacificRimKaiju(): iKaiju[] {
    return this.allKaiju.pacificRim;
  }

  public set chosenMonsterName(name: string) {
    this.selectedKaiju = name;
  }

  public set chosenKaijuGroup(group: string){
    this.kaijuGroup = group;
  }

  public get chosenKaijuHeight(): number {
    let kaijuHeight: any;
    if(this.kaijuGroup === 'godzilla'){
      kaijuHeight = this.allKaiju.godzilla.find(kaiju => kaiju.name === this.selectedKaiju);
    } else if (this.kaijuGroup === 'gamera'){
      kaijuHeight = this.allKaiju.gamera.find(kaiju => kaiju.name === this.selectedKaiju);
    } else if (this.kaijuGroup === 'ultraman'){
      kaijuHeight = this.allKaiju.ultraman.find(kaiju => kaiju.name === this.selectedKaiju);
    } else if (this.kaijuGroup === 'pacificRim'){
      kaijuHeight = this.allKaiju.pacificRim.find(kaiju => kaiju.name === this.selectedKaiju);
    }
    return kaijuHeight!.height;
  }
}

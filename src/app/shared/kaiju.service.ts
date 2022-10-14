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
      {name: 'Baragon', height: 25},
      {name: 'Anguirus', height: 60},
      {name: 'Biollante', height: 120},
      {name: 'Destoroyah', height: 120},
      {name: 'Ebirah', height: 50},
      {name: 'Gabara', height: 58},
      {name: 'Gigan', height: 65},
      {name: 'Jet Jaguar', height: 50},
      {name: 'King Caesar', height: 50},
      {name: 'King Ghidorah', height: 100},
      {name: 'Manda', height: 150},
      {name: 'Mechagodzilla', height: 50},
      {name: 'Minilla', height: 18},
      {name: 'Mothra', height: 80},
      {name: 'Orga', height: 60},
      {name: 'Rodan', height: 50},
      {name: 'Spacegodzilla', height: 120},
      {name: 'Titanosaurus', height: 60},
      {name: 'Varan', height: 50},
    ],
    gamera: [
      {name: 'Gamera', height: 50},
      {name: 'Barugon', height: 80},
      {name: 'Guiron', height: 85},
      {name: 'Gyaos', height: 65},
      {name: 'Iris', height: 99},
      {name: 'Jiger', height: 80},
      {name: 'Legion', height: 140},
      {name: 'Viras', height: 96},
      {name: 'Zedus', height: 50},
      {name: 'Zigra', height: 80},
    ],
    ultraman: [
    ],
    pacificRim: [
      {name: 'Knifehead', height: 96.012},
      {name: 'Onibaba', height: 57.3024},
      {name: 'Otachi', height: 63.0936},
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
    if(!this.kaijuGroup){
      kaijuHeight = 0;
    }
    if(this.kaijuGroup === 'godzilla'){
      kaijuHeight = this.allKaiju.godzilla.find(kaiju => kaiju.name === this.selectedKaiju);
    } else if (this.kaijuGroup === 'gamera'){
      kaijuHeight = this.allKaiju.gamera.find(kaiju => kaiju.name === this.selectedKaiju);
    // } else if (this.kaijuGroup === 'ultraman'){
    //   kaijuHeight = this.allKaiju.ultraman.find(kaiju => kaiju.name === this.selectedKaiju);
    } else if (this.kaijuGroup === 'pacificRim'){
      kaijuHeight = this.allKaiju.pacificRim.find(kaiju => kaiju.name === this.selectedKaiju);
    }
    return kaijuHeight!.height;
  }
}

import { Injectable, Input } from '@angular/core';

import { iKaiju } from './ikaiju';

@Injectable({
  providedIn: 'root'
})
export class KaijuService {
  public kaijuHeight: number = 0;
  public selectedKaiju: string = '';
  public kaijuGroup: string = '';

  public allKaiju = {
    godzilla: [
      { name: 'Anguirus', height: 60 },
      { name: 'Baragon', height: 25 },
      { name: 'Battra', height: 1 },
      { name: 'Behemoth', height: 1 },
      { name: 'Biollante', height: 120 },
      { name: 'Destoroyah', height: 120 },
      { name: 'Dorat', height: 1 },
      { name: 'Ebirah', height: 50 },
      { name: 'Gabara', height: 58 },
      { name: 'Gaira', height: 1 },
      { name: 'Gigan', height: 65 },
      { name: 'Godzilla', height: 50 },
      { name: 'Godzilla Earth', height: 1 },
      { name: 'Gorosaurus', height: 1 },
      { name: 'Hedorah', height: 1 },
      { name: 'Jet Jaguar', height: 50 },
      { name: 'Kamacuras', height: 1 },
      { name: 'King Caesar', height: 50 },
      { name: 'King Ghidorah', height: 100 },
      { name: 'Kumonga', height: 1 },
      { name: 'Manda', height: 150 },
      { name: 'Mechagodzilla', height: 50 },
      { name: 'Mechanikong', height: 1 },
      { name: 'Megaguirus', height: 1 },
      { name: 'Megalon', height: 1 },
      { name: 'Methusaleh', height: 1 },
      { name: 'Minilla', height: 18 },
      { name: 'Muto', height: 1 },
      { name: 'Mothra', height: 80 },
      { name: 'Orga', height: 60 },
      { name: 'Rodan', height: 50 },
      { name: 'Sanda', height: 1 },
      { name: 'Scylla', height: 1 },
      { name: 'Shin Godzilla', height: 1 },
      { name: 'Skullcrawler', height: 1 },
      { name: 'Spacegodzilla', height: 120 },
      { name: 'Titanosaurus', height: 60 },
      { name: 'Varan', height: 50 },
    ],
    gamera: [
      { name: 'Barugon', height: 80 },
      { name: 'Gamera', height: 50 },
      { name: 'Guiron', height: 85 },
      { name: 'Gyaos', height: 65 },
      { name: 'Iris', height: 99 },
      { name: 'Jiger', height: 80 },
      { name: 'Legion', height: 140 },
      { name: 'Viras', height: 96 },
      { name: 'Zedus', height: 50 },
      { name: 'Zigra', height: 80 },
    ],
    ultraman: [
      { name: 'Aboras', height: 1 },
      { name: 'Alien Baltan', height: 1 },
      { name: 'Alien Dada', height: 1 },
      { name: 'Alien Mefilas', height: 1 },
      { name: 'Banila', height: 1 },
      { name: 'Baraba', height: 1 },
      { name: 'Bemular', height: 1 },
      { name: 'Black King', height: 1 },
      { name: 'Chandlar', height: 1 },
      { name: 'Dinosaur Tank', height: 1 },
      { name: 'Dodongo', height: 1 },
      { name: 'Dorako', height: 1 },
      { name: 'Eleking', height: 1 },
      { name: 'Gamakugira', height: 1 },
      { name: 'Gango', height: 1 },
      { name: 'Gargorgon', height: 1 },
      { name: 'Gavadon', height: 1 },
      { name: 'Gazort', height: 1 },
      { name: 'Geozark', height: 1 },
      { name: 'Giradorus', height: 1 },
      { name: 'Goldon', height: 1 },
      { name: 'Gomora', height: 1 },
      { name: 'Gubila', height: 1 },
      { name: 'Jamila', height: 1 },
      { name: 'Jirahs', height: 1 },
      { name: 'Kanegon', height: 1 },
      { name: 'Kelbim', height: 1 },
      { name: 'Kemular', height: 1 },
      { name: 'King Guesra', height: 1 },
      { name: 'Kiyla', height: 1 },
      { name: 'Melba', height: 1 },
      { name: 'Miclas', height: 1 },
      { name: 'Mukadender', height: 1 },
      { name: 'Muruchi', height: 1 },
      { name: 'Neronga', height: 1 },
      { name: 'Peguila', height: 1 },
      { name: 'Pestar', height: 1 },
      { name: 'Pigmon', height: 1 },
      { name: 'Ragon', height: 1 },
      { name: 'Red King', height: 1 },
      { name: 'Sadola', height: 1 },
      { name: 'Seabozu', height: 1 },
      { name: 'Skydon', height: 1 },
      { name: 'Takkong', height: 1 },
      { name: 'Telesdon', height: 1 },
      { name: 'Twintail', height: 1 },
      { name: 'Windom', height: 1 },
      { name: 'Woo', height: 1 },
      { name: 'Zaragas', height: 1 },
      { name: 'Zetton', height: 1 },
      { name: 'Zumbolar', height: 1 },
    ],
    pacificRim: [
      { name: 'Knifehead', height: 96.012 },
      { name: 'Onibaba', height: 57.3024 },
      { name: 'Otachi', height: 63.0936 },
    ]
  }

  public get getGameraKaiju(): iKaiju[] {
    return this.allKaiju.gamera;
  }

  public get getGodzillaKaiju(): iKaiju[] {
    return this.allKaiju.godzilla;
  }

  public get getpacificRimKaiju(): iKaiju[] {
    return this.allKaiju.pacificRim;
  }

  public get getUltramanKaiju(): iKaiju[] {
    return this.allKaiju.ultraman;
  }

  public get selectedKaijuHeight(): number {
    let kaijuHeight: any;
    if (this.kaijuGroup === 'godzilla') {
      kaijuHeight = this.allKaiju.godzilla.find(kaiju => kaiju.name === this.selectedKaiju);
    } else if (this.kaijuGroup === 'gamera') {
      kaijuHeight = this.allKaiju.gamera.find(kaiju => kaiju.name === this.selectedKaiju);
    } else if (this.kaijuGroup === 'ultraman') {
      kaijuHeight = this.allKaiju.ultraman.find(kaiju => kaiju.name === this.selectedKaiju);
    } else if (this.kaijuGroup === 'pacificRim') {
      kaijuHeight = this.allKaiju.pacificRim.find(kaiju => kaiju.name === this.selectedKaiju);
    }
    return kaijuHeight!.height;
  }

  public set selectedKaijuName(name: string) {
    this.selectedKaiju = name;
  }

  public set selectedKaijuGroup(group: string) {
    this.kaijuGroup = group;
  }

}

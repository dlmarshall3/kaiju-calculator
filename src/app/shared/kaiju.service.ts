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
      { name: 'Battra', height: 73 },
      { name: 'Behemoth', height: 107.899 },
      { name: 'Biollante', height: 120 },
      { name: 'Destoroyah', height: 120 },
      { name: 'Dorat', height: .3 },
      { name: 'Ebirah', height: 50 },
      { name: 'Gabara', height: 58 },
      { name: 'Gaira', height: 25 },
      { name: 'Gigan', height: 65 },
      { name: 'Godzilla', height: 50 },
      { name: 'Godzilla Earth', height: 300 },
      { name: 'Gorosaurus', height: 20 },
      { name: 'Hedorah', height: 60 },
      { name: 'Jet Jaguar', height: 50 },
      { name: 'Kamacuras', height: 50 },
      { name: 'King Caesar', height: 50 },
      { name: 'King Ghidorah', height: 100 },
      { name: 'Kumonga', height: 45 },
      { name: 'Manda', height: 150 },
      { name: 'Mechagodzilla', height: 50 },
      { name: 'Mechani-Kong', height: 20 },
      { name: 'Megaguirus', height: 50 },
      { name: 'Megalon', height: 55 },
      { name: 'Methusaleh', height: 98.1456 },
      { name: 'Minilla', height: 18 },
      { name: 'Muto', height: 91.44 },
      { name: 'Mothra', height: 80 },
      { name: 'Orga', height: 60 },
      { name: 'Rodan', height: 50 },
      { name: 'Sanda', height: 30 },
      { name: 'Scylla', height: 103.937 },
      { name: 'Shin Godzilla', height: 118.5 },
      { name: 'Skullcrawler', height: 59.1312 },
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
      { name: 'Aboras', height: 60 },
      { name: 'Alien Baltan', height: 50 },
      { name: 'Alien Mefilas', height: 60 },
      { name: 'Banila', height: 55 },
      { name: 'Baraba', height: 75 },
      { name: 'Bemular', height: 50 },
      { name: 'Black King', height: 65 },
      { name: 'Chandlar', height: 36 },
      { name: 'Dada', height: 40 },
      { name: 'Dinosaur Tank', height: 60 },
      { name: 'Dodongo', height: 30 },
      { name: 'Dorako', height: 45 },
      { name: 'Eleking', height: 53 },
      { name: 'Gamakugira', height: 35 },
      { name: 'Gango', height: 50 },
      { name: 'Gargorgon', height: 55 },
      { name: 'Gavadon', height: 60 },
      { name: 'Gazort', height: 59 },
      { name: 'Geozark', height: 48 },
      { name: 'Giradorus', height: 65 },
      { name: 'Goldon', height: 65 },
      { name: 'Gomora', height: 40 },
      { name: 'Gubila', height: 50 },
      { name: 'Jamila', height: 50 },
      { name: 'Jirahs', height: 45 },
      { name: 'Kanegon', height: 2 },
      { name: 'Kelbim', height: 44 },
      { name: 'Kemular', height: 35 },
      { name: 'Keylla', height: 40 },
      { name: 'King Guesra', height: 68 },
      { name: 'Melba', height: 57 },
      { name: 'Miclas', height: 40 },
      { name: 'Mukadender', height: 59 },
      { name: 'Muruchi', height: 48 },
      { name: 'Neronga', height: 45 },
      { name: 'Peguila', height: 40 },
      { name: 'Pestar', height: 50 },
      { name: 'Pigmon', height: 1 },
      { name: 'Ragon', height: 50 },
      { name: 'Red King', height: 45 },
      { name: 'Sadola', height: 60 },
      { name: 'Seabozu', height: 40 },
      { name: 'Skydon', height: 60 },
      { name: 'Takkong', height: 45 },
      { name: 'Telesdon', height: 60 },
      { name: 'Twin Tail', height: 45 },
      { name: 'Windom', height: 40 },
      { name: 'Woo', height: 400 },
      { name: 'Zaragas', height: 40 },
      { name: 'Zetton', height: 60 },
      { name: 'Zumbolar', height: 40 },
    ],
    pacificRim: [
      { name: 'Knifehead', height: 96.012 },
      { name: 'Leatherback', height: 81.3816 },
      { name: 'Mutavore', height: 89.916 },
      { name: 'Onibaba', height: 57.3024 },
      { name: 'Otachi', height: 63.0936 },
      { name: 'Raiju', height: 109.118 },
      { name: 'Scunner', height: 134.417 },
      { name: 'Slattern', height: 181.661 },
      { name: 'Trespasser', height: 92.0496 },
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

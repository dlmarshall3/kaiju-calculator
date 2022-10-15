import { Component } from '@angular/core';

import { KaijuService } from '../shared/kaiju.service';

@Component({
  selector: 'app-kaiju-display',
  templateUrl: './kaiju-display.component.html',
  styleUrls: ['./kaiju-display.component.css']
})
export class KaijuDisplayComponent {

  constructor(private kaijuService: KaijuService) { }

  public get kaijuHeight(){
    return Math.floor(this.kaijuService.selectedKaijuHeight);
  }

  public get kaijuImage(){
    if(!this.selectedKaiju){
      return 'assets/img/godzilla.png';
    } else {
      return `assets/img/${this.selectedKaiju.toLowerCase().replace(/ +/g, "")}.png`
    }
  }

  public get selectedKaiju(){
    return this.kaijuService.selectedKaiju;
  }
}

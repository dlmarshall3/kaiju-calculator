import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { KaijuService } from '../shared/kaiju.service';

@Component({
  selector: 'app-kaiju-display',
  templateUrl: './kaiju-display.component.html',
  styleUrls: ['./kaiju-display.component.css']
})
export class KaijuDisplayComponent implements OnInit {

  constructor(private kaijuService: KaijuService) { }

  ngOnInit(): void {
  }

  get selectedKaiju(){
    return this.kaijuService.selectedKaiju;
  }

  get kaijuHeight(){
    return Math.floor(this.kaijuService.chosenKaijuHeight);
  }

  get kaijuImage(){
    if(!this.selectedKaiju){
      return 'assets/img/godzilla.png';
    } else {
      return `assets/img/${this.selectedKaiju.toLowerCase().replace(/ +/g, "")}.png`
    }
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { KaijuDisplayComponent } from './kaiju-display/kaiju-display.component';
import { ConversionResultsComponent } from './conversion-results/conversion-results.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CalculatorComponent,
    KaijuDisplayComponent,
    ConversionResultsComponent,
    DropdownComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

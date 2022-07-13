import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculationService} from '../services/calculation.service';
import { MyLibComponent } from '../my-lib-component.component';
@NgModule({
  declarations: [
    AppComponent,
    MyLibComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent],
  exports:[
    MyLibComponent
  ]
})
export class AppModule { }

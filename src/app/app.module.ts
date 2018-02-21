import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise-1/exercise-1.component';
import { Exercise2Component } from './exercise-2/exercise-2.component';


@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    Exercise2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

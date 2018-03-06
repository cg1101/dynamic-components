import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { Exercise1Module } from './exercise-1/exercise-1.module';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    Exercise1Module,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

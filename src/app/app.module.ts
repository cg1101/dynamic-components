import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Module } from './exercise-1/exercise-1.module';
import { Exercise2Module } from './exercise-2/exercise-2.module';

import { CampaignDetailCardComponent, CampaignOverviewCardComponent, UnknownDynamicComponent } from './exercise-2/card.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    Exercise1Module,
    Exercise2Module,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  entryComponents: [
    CampaignOverviewCardComponent,
    CampaignDetailCardComponent,
    UnknownDynamicComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

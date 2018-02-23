import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Module } from './exercise-1/exercise-1.module';
import { Exercise2Module } from './exercise-2/exercise-2.module';
import { Exercise3Module } from './exercise-3/exercise-3.module';

import { CampaignDetailCardComponent, CampaignOverviewCardComponent, UnknownDynamicComponent } from './exercise-2/card.component';
import { ResponseUiService } from './response-ui.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    Exercise1Module,
    Exercise2Module,
    Exercise3Module,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ResponseUiService,
  ],
  entryComponents: [
    CampaignOverviewCardComponent,
    CampaignDetailCardComponent,
    UnknownDynamicComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

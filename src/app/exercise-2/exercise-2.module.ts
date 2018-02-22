import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Exercise2RoutingModule } from './exercise-2-routing.module';
import { Exercise2Component } from './exercise-2.component';

import {
  CampaignDetailCardComponent,
  CampaignOverviewCardComponent,
  CardComponent,
  UnknownDynamicComponent
} from './card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Exercise2RoutingModule,
  ],
  declarations: [
    Exercise2Component,
    CampaignDetailCardComponent,
    CampaignOverviewCardComponent,
    CardComponent,
    UnknownDynamicComponent,
  ],
  exports: [
    Exercise2Component,
    CampaignDetailCardComponent,
    CampaignOverviewCardComponent,
    CardComponent,
    UnknownDynamicComponent,
  ]
})
export class Exercise2Module { }

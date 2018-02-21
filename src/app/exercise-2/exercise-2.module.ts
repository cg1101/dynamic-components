import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercise2RoutingModule } from './exercise-2-routing.module';
import { Exercise2Component } from './exercise-2.component';

@NgModule({
  imports: [
    CommonModule,
    Exercise2RoutingModule,
  ],
  declarations: [
    Exercise2Component,
  ],
  exports: [
    Exercise2Component,
  ]
})
export class Exercise2Module { }

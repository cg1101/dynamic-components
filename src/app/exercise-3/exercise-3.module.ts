import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercise3RoutingModule } from './exercise-3-routing.module';
import { Exercise3Component } from './exercise-3.component';

@NgModule({
  imports: [
    CommonModule,
    Exercise3RoutingModule
  ],
  declarations: [Exercise3Component]
})
export class Exercise3Module { }

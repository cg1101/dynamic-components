import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercise4RoutingModule } from './exercise-4-routing.module';
import { Exercise4Component } from './exercise-4.component';

@NgModule({
  imports: [
    CommonModule,
    Exercise4RoutingModule
  ],
  declarations: [Exercise4Component]
})
export class Exercise4Module { }

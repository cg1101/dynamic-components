import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercise1RoutingModule } from './exercise-1-routing.module';
import { Exercise1Component } from './exercise-1.component';
import { FlexListComponent } from './flex-list.component';

@NgModule({
  imports: [
    CommonModule,
    Exercise1RoutingModule
  ],
  declarations: [
    Exercise1Component,
    FlexListComponent,
  ],
  exports: [
    Exercise1Component,
  ]
})
export class Exercise1Module { }

import { NgModule, Compiler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Exercise3RoutingModule } from './exercise-3-routing.module';
import { Exercise3Component } from './exercise-3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Exercise3RoutingModule
  ],
  declarations: [
    Exercise3Component,
  ],
  providers: [
    Compiler,
  ],
  exports: [
    Exercise3Component,
  ]
})
export class Exercise3Module { }

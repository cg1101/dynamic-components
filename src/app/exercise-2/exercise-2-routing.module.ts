import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise2Component } from './exercise-2.component';

const routes: Routes = [
  {
    path: '',
    component: Exercise2Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exercise2RoutingModule { }

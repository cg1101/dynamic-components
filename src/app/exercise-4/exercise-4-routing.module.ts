import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise4Component } from './exercise-4.component';

const routes: Routes = [
  {
    path: '',
    component: Exercise4Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exercise4RoutingModule { }

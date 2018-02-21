import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exercise1Component } from './exercise-1/exercise-1.component';
import { Exercise2Component } from './exercise-2/exercise-2.component';

const routes: Routes = [
  {path: 'exercise-1', component: Exercise1Component},
  {path: 'exercise-2', component: Exercise2Component},
  {path: '', redirectTo: '/exercise-1', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

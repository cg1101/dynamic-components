import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'exercise-2',
    loadChildren: './exercise-2/exercise-2.module#Exercise2Module'
  },
  {
    path: 'exercise-3',
    loadChildren: './exercise-3/exercise-3.module#Exercise3Module'
  },
  {
    path: 'exercise-4',
    loadChildren: './exercise-4/exercise-4.module#Exercise4Module'
  },
  {
    path: '',
    redirectTo: 'exercise-1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

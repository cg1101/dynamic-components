import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'exercise-2',
  //   loadChildren: './exercise-2/exercise-2.module#Exercise2Module'
  // },
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

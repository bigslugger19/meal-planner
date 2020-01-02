import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealsComponent } from './meals.component';

const routes: Routes = [
  {
    path: '',
    component: MealsComponent,
    data: {
      title: 'Meals'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsRoutingModule {}
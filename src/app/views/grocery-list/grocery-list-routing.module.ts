import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroceryListComponent } from './grocery-list.component';

const routes: Routes = [
  {
    path: '',
    component: GroceryListComponent,
    data: {
      title: 'GroceryList'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryListRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryListComponent } from './grocery-list.component';
import {GroceryListRoutingModule} from './grocery-list-routing.module';



@NgModule({
  declarations: [GroceryListComponent],
  imports: [
    CommonModule,
    GroceryListRoutingModule
  ]
})
export class GroceryListModule { }

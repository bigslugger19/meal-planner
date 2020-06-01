import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import {InventoryRoutingModule} from './inventory-routing.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [InventoryComponent],
    imports: [
        CommonModule,
        InventoryRoutingModule,
        FormsModule
    ]
})
export class InventoryModule { }

import { Component, OnInit } from '@angular/core';
import {InventoryItem} from '../../model/models';
import {InventoryService} from '../../services/inventory.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventoryList: InventoryItem[];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventoryService.getInventoryItems().subscribe(inventoryList => this.inventoryList = inventoryList);
  }

  saveItem(item: InventoryItem) {

  }

  editItem(item: InventoryItem) {
    item.editMode = true;
    item.original = {...item};
  }

  cancelEdit(item: InventoryItem) {
    item.id = item.original.id;
    item.name = item.original.name;
    item.quantityOnHand = item.original.quantityOnHand;
    item.measurementUnit = item.original.measurementUnit;
    item.original = null;
    item.editMode = false;
  }
}

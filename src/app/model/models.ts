
export interface Meal {
  name: string;
  instructions: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  minReq: number;
  quantity: string;
}

export interface MeasurementUnit {
  id: string;
  name: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  quantityOnHand: number;
  measurementUnit: MeasurementUnit;
  editMode: boolean;
  original: InventoryItem;
}

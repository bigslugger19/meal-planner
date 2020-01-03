
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

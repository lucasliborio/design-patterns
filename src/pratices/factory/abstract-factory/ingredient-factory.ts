import { Cheese, Dough, Sauce } from "../interfaces/ingredients";

export interface IngredientFactory {
  getSauce(type: string): Sauce
  getCheese(type: string): Cheese
  getDough(type: string): Dough
}
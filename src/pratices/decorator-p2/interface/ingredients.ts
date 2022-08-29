import { Pizza } from "./pizza";

export abstract class Ingredients implements Pizza {
  constructor (private pizza: Pizza) {}
  ingredients: string[];
  getCost(): number {
    return this.pizza.getCost()
  }
  getIngredients(): string[] {
    return this.pizza.getIngredients()
  }
} 
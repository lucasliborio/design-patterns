import { Pizza } from "../interface/pizza";

export class PizzaCalabresa extends Pizza {
  getCost(): number {
    return 16.0
  }
  getIngredients() {
    return ['Pizza de Calabruxa']
  }
}
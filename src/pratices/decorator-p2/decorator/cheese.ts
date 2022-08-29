import { Ingredients } from "../interface/ingredients";
import { Pizza } from "../interface/pizza";

export class CheeseMussarela extends Ingredients {
  constructor(pizza: Pizza) {
    super(pizza)
  }
  
  getCost(): number {
    return super.getCost() + 0.30
  }
  getIngredients(): string[] {
    return super.getIngredients().concat('Cheese Mussarela')
  }
}
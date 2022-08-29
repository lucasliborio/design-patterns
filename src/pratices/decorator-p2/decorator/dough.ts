import { Ingredients } from "../interface/ingredients"
import { Pizza } from "../interface/pizza"

export class MassaRecheada extends Ingredients {
  constructor(pizza: Pizza) {
    super(pizza)
  }
  
  getCost(): number {
    return super.getCost() + 0.30
  }
  getIngredients(): string[] {
    return super.getIngredients().concat('Massa Recheada')
  }
}
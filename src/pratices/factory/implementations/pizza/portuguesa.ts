import { IngredientFactory } from "../../abstract-factory/ingredient-factory";
import { IngredientsOption } from "../../interfaces/ingredients";
import { Pizza } from "../../super-class/pizza";

export class PortuguesaPizza extends Pizza {
  constructor (private ingredientFactory: IngredientFactory) {
    super()
    this.name = 'Pizza de Porguesa'
  }
  prepare(ingredientesOption: IngredientsOption): void {
    this.cheese = this.ingredientFactory.getCheese(ingredientesOption.cheese)
    this.sauce = this.ingredientFactory.getSauce(ingredientesOption.sauce)
    this.dough = this.ingredientFactory.getCheese(ingredientesOption.dough)
    
  }
}
import { IngredientFactory } from "../../abstract-factory/ingredient-factory";
import { IngredientsOption } from "../../interfaces/ingredients";
import { Pizza } from "../../super-class/pizza";
import { MussarelaCheese } from "../ingredients/cheese/mussarela";
import { DoughNormal } from "../ingredients/dough/normal";
import { MarinaraSauce } from "../ingredients/sauce/marinara";

export class CalabresaPizza extends Pizza {
  constructor (private ingredientFactory: IngredientFactory) {
    super()
    this.name = 'Pizza de Calabresa'
    
  }
  prepare(ingredientesOption: IngredientsOption): void {
    this.sauce = this.ingredientFactory.getSauce(ingredientesOption.sauce)
    this.cheese = this.ingredientFactory.getCheese(ingredientesOption.cheese)
    this.dough = this.ingredientFactory.getDough(ingredientesOption.dough)
  } 
}

/* this.ingredients = {
  cheese: new MussarelaCheese(),
  sauce: new MarinaraSauce(),
  dough: new DoughNormal()
} */
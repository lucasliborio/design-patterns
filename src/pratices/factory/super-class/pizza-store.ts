import { IngredientFactory } from "../abstract-factory/ingredient-factory";
import { IngredientsOption } from "../interfaces/ingredients";
import { Pizza } from "./pizza";

//CREATOR
export abstract class PizzaStore {
  ingredientsFactory: IngredientFactory
  constructor(ingredientsFactory: IngredientFactory ) { 
    this.ingredientsFactory = ingredientsFactory
  }

  orderPizza(type: string, ingredientsOption: IngredientsOption): Pizza {
    let pizza = this.createPizza(type)
    pizza.prepare(ingredientsOption)
    pizza.cut()
    pizza.box()
    return pizza
  }

  abstract createPizza(type: string): Pizza

}
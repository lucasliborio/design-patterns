import { Pizza } from "../../super-class/pizza";
import { PizzaStore } from "../../super-class/pizza-store";
import { NandinhoIngredientFactory } from "../ingredient-factory/nandinho-ingredients-factory";
import { CalabresaPizza } from "../pizza/calabresa";
import { PortuguesaPizza } from "../pizza/portuguesa";

export class VitorinosPizzaStore extends PizzaStore {
  constructor() {
    super(new NandinhoIngredientFactory())
  }
  createPizza(type: string): Pizza {

    let pizza!: Pizza;
    switch (type) {
      case "portuguesa":
        pizza = new PortuguesaPizza(this.ingredientsFactory)
      case "calabresa":
        pizza = new CalabresaPizza(this.ingredientsFactory)
      default:
        break;
    }
    return pizza
  }

}
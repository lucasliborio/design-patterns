import { SsaPortuguesaPizza } from "../implementations/ssa-pizzas/portuguesa-pizaa";
import { Pizza } from "../interfaces/pizza";
import { PizzaStore } from "../interfaces/pizza-store";

export class SsaStylePizzaStore extends PizzaStore {

  createPizza(type: string): Pizza {
    let pizza!: Pizza;

    switch (type) {
      case 'cheese':
        //pizza = new SsaCheesePizza()
        break;
      case 'portuguesa':
        pizza = new SsaPortuguesaPizza()
        break;
      case 'carne seca com banana da terra':
        //pizza = new SsaCarneSecaPizza()
        break;

      default:
        break;
    }
    return pizza
  }

}
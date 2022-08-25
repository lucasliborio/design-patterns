import { Pizza } from "../interfaces/pizza";
import { PizzaStore } from "../interfaces/pizza-store";

export class ItalyStylePizzaStore extends PizzaStore {

  createPizza(type: string): Pizza {
    let pizza!: Pizza;

    switch (type) {
      case 'cheese':
        //pizza = new ItalySicilianaPizza()
        break;
      case 'portuguesa':
        //pizza = new ItalyMargueritaPizza()
        break;
      case 'carne seca com banana da terra':
        //pizza = new Italy4cheesePizza()
        break;

      default:
        break;
    }
    return pizza
  }

}
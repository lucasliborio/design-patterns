import { CheesePizza } from "../implementations/cheese-pizza";
import { Pizza } from "../interfaces/pizza";

export class SimplePizzaFactory {

  create(type: string): Pizza {
    let pizza!: Pizza
    switch (type) {
      case 'cheese':
        pizza = new CheesePizza()
        break;
      default:
        break;
    }
    return pizza
  }
}
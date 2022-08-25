import { Pizza } from "../interfaces/pizza";
import { SimplePizzaFactory } from "../pizza-factory/simple-pizza-factory";

//DEPRACATED
//FIRST IMPLMENETATION OF SIMPLES PIZZA USING THIS CLASS
export class PizzaStore {
  constructor(private factory: SimplePizzaFactory) { }

  orderPizza(type: string) {
    let pizza:Pizza = this.factory.create(type)
    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()
  }
}
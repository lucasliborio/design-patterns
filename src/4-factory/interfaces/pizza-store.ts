import { Pizza } from "./pizza"

export abstract class PizzaStore {
  public orderPizza(type: string) {
    let pizza: Pizza = this.createPizza(type)
    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()
  }
  abstract createPizza(type: string): Pizza
}
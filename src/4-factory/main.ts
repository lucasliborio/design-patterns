import { SimplePizzaFactory } from "./pizza-factory/simple-pizza-factory";
import { SsaStylePizzaStore } from "./pizza-factory/ssa-pizza-store copy";
import { PizzaStore } from "./pizza-store/pizza-store";

//FIRST IMPLEMENTATION OF FACTORYS
//const pizzaFactory = new SimplePizzaFactory
//const pizzaStore = new PizzaStore(pizzaFactory)
//pizzaStore.orderPizza('cheese')

const ssaPizzaStore = new SsaStylePizzaStore()
ssaPizzaStore.orderPizza('portuguesa')
import { SsaStylePizzaStore } from "./pizza-factory/ssa-pizza-store copy";


//FIRST IMPLEMENTATION OF FACTORYS
//const pizzaFactory = new SimplePizzaFactory
//const pizzaStore = new PizzaStore(pizzaFactory)
//pizzaStore.orderPizza('cheese')

const ssaPizzaStore = new SsaStylePizzaStore()
ssaPizzaStore.orderPizza('portuguesa')
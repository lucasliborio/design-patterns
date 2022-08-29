
import { CheeseMussarela } from "./decorator/cheese";
import { MassaRecheada } from "./decorator/dough";
import { TomatoSauce } from "./decorator/sauce";
import { PizzaCalabresa } from "./pizza/calabresa";

let pizza = new PizzaCalabresa()
//console.log(pizza)
pizza = new TomatoSauce(pizza)
//console.log(pizza)
pizza = new CheeseMussarela(pizza)
//console.log(pizza)
pizza = new MassaRecheada(pizza)
console.log(pizza)
console.log(pizza.getCost())
console.log(pizza.getIngredients())


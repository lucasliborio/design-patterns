import { HamburgerWithCheese } from "./decorator/hamburguer-with-cheese";
import { HamburgerWithLettuce } from "./decorator/hamburguer-wuth-lettuce";
import { WhopperBurguer } from "./implementation/hamburguer-whoper";

let hamburguer =  new WhopperBurguer()
console.log(hamburguer.getToppings())
hamburguer = new HamburgerWithLettuce(hamburguer)
console.log(hamburguer.getToppings())
hamburguer = new HamburgerWithCheese(hamburguer)
console.log(hamburguer.getToppings())
console.log(hamburguer.getTotalCalories())
console.log(hamburguer)
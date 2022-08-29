import { Expresso } from "./beverages/expresso";
import { Mocha } from "./decorator/mocha";
import { Soy } from "./decorator/soy";
import { coffeMaker } from "./order-system/order";
enum Condiments {
  MOCHA = "mocha",
  MILK = "milk",
  WHIP = 'whip',
  SOY = 'soy'

}
enum Beverage {
  EXPRESSO = 'expresso',
  HOUSEBLEND = 'houseblend'
}

let orderNote = [
  Beverage.HOUSEBLEND,
  Condiments.MOCHA,
  Condiments.MOCHA
]
let beverage = new Expresso()
beverage = new Mocha(beverage)
beverage = new Soy(beverage)
console.log(beverage.getDescription() + " $" + beverage.cost())


const orderFinish = coffeMaker(orderNote)
console.log(orderFinish.getDescription() + " $" + orderFinish.cost())
console.log(orderFinish)
import { Beverage } from "../abstract-class/beverage";
import { Expresso } from "../beverages/expresso";
import { HouseBlend } from "../beverages/house-blend";
import { Mocha } from "../decorator/mocha";
import { Soy } from "../decorator/soy";



export const coffeMaker = (order: string[]) => {
  const beverageOrder = order.splice(0, 1)[0];
  const condimentsOrder = order;
  let beverage: Beverage | undefined
  switch (beverageOrder) {
    case "expresso":
      beverage = new Expresso();
      break
    case "houseblend":
      beverage = new HouseBlend();
      break
    default:
      break;
  }
  for (const condiment of condimentsOrder) {
    switch (condiment) {
      case "mocha":
        if (beverage) beverage  = new Mocha(beverage);
        break
      case "soy":
        if (beverage) beverage = new Soy(beverage);
        break
      default:
        break
    }
  }
  return beverage
}
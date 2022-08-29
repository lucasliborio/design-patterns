import { Hamburger } from "../interface/hamburguer";
import { HamburgerDecorator } from "../interface/hamburguer-decorator";

export class HamburgerWithCheese extends HamburgerDecorator {
  constructor(hamburguer: Hamburger){
    super(hamburguer)
  }
  getToppings(): string[] {
    let topping = super.getToppings();
    topping.push("Cheese")
    return topping
  }
  getTotalCalories(): number {
    return 50.0 + super.getTotalCalories()
  }
}
import { Hamburger } from "../interface/hamburguer";
import { HamburgerDecorator } from "../interface/hamburguer-decorator";

export class HamburgerWithLettuce extends HamburgerDecorator {
  constructor(hamburguer: Hamburger){
    super(hamburguer)
  }
  getToppings(): string[] {
    let topping = super.getToppings();
    topping.push("Lettuce")
    return topping
  }
  getTotalCalories(): number {
    return 25.0 + super.getTotalCalories()
  }
}
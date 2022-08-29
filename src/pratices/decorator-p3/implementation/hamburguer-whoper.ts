import { Hamburger } from "../interface/hamburguer";

export class WhopperBurguer implements Hamburger {
  getToppings(): string[] {
    let topping: string[] = []
    topping.push("Bread")
    return topping
  }
  getTotalCalories(): number {
    return 100.0;
  }

}
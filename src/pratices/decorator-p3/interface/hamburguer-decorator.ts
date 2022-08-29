import { Hamburger } from "./hamburguer";

export abstract class HamburgerDecorator implements Hamburger {
  constructor(private hamburguer: Hamburger) { }
  getToppings(): string[] {
    return this.hamburguer.getToppings()
  }
  getTotalCalories(): number {
    return this.hamburguer.getTotalCalories()
  }

} 
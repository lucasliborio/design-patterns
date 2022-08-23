import { Beverage } from "../abstract-class/beverage";

export class HouseBlend extends Beverage {
  constructor() {
    super()
    this.description = "HouseBlend Coffe"
  }

  public cost(): number {
    return 0.89
  }
} 
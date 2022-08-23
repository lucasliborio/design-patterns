import { Beverage } from "../abstract-class/beverage";

export class HouseBlend extends Beverage {
  description : string = "HouseBlend Coffe"
  public cost(): number {
    return  0.89
  }
} 
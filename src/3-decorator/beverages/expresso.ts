import { Beverage } from "../abstract-class/beverage";

export class Expresso extends Beverage {
  description : string = "Expresso"
  public cost(): number {
    return 2.00
  }
} 
import { Beverage } from "../abstract-class/beverage";

export class Expresso extends Beverage {
  constructor(){
    super()
    this.description = "EXPRESSO"
  }
  public cost(): number {
    return 2.00
  }
} 
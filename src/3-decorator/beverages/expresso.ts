import { Beverage } from "../abstract-class/beverage";

export class Expresso extends Beverage {
  public getDescription(): string {
    return "Expresso Coffee"
  }
  public cost(): number {
    return 2.00
  }
} 
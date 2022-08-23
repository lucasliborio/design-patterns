import { Beverage } from "../abstract-class/beverage";
import { CondimentDecorator } from "../abstract-class/condiment-decorator";

export class Mocha extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super(beverage)
  }
  public getDescription(): string {
    return this.beverage.getDescription() + ", Mocha" 
  }
  public cost(): number {
    return this.beverage.cost() + 0.20
  }
}
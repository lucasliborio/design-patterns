import { Beverage } from "../abstract-class/beverage";
import { CondimentDecorator } from "../abstract-class/condiment-decorator";

export class Mocha extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super(beverage)
    this.description = ", Mocha"
  }
  public getDescription(): string {
    return this.beverage.getDescription() + this.description
  }
  public cost(): number {
    return this.beverage.cost() + 0.20
  }
}
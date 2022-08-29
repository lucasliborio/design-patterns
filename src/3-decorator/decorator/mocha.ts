import { Beverage } from "../abstract-class/beverage";
import { CondimentDecorator } from "../abstract-class/condiment-decorator";

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage)
  }
  public getDescription(): string {
    return super.getDescription() + ', Mocha'
  }
  public cost(): number {
    return super.cost() + 0.20
  }
}
import { Beverage } from "../abstract-class/beverage";
import { CondimentDecorator } from "../abstract-class/condiment-decorator";

export class Soy extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super(beverage)
    this.description = ', Soy'
  }
  public getDescription(): string {
    return this.beverage.getDescription() + this.description
  }
  public cost(): number {
    return this.beverage.cost() + 0.40
  }
}
import { Beverage } from "../abstract-class/beverage";
import { CondimentDecorator } from "../abstract-class/condiment-decorator";

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage)
  
  }
  public getDescription(): string {
    return super.getDescription() + ", soy"
  }
  public cost(): number {
    return super.cost() + 0.40
  }
}
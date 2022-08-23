import { Beverage } from "./beverage";

export abstract class CondimentDecorator extends Beverage {
  constructor (beverage: Beverage) {
    super()
  }
  public abstract getDescription(): string;
}
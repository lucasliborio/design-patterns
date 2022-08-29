import { Beverage } from "./beverage";

export abstract class CondimentDecorator implements Beverage {
  constructor(protected beverage: Beverage) {}
  description: string;
  public cost(): number {
    return this.beverage.cost()
  }
  public getDescription(): string {
    return this.beverage.getDescription()
  }
}
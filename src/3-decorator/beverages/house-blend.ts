import { Beverage } from "../abstract-class/beverage";

export class HouseBlend implements Beverage {
  
  public getDescription(): string {
    return "House Blend Coffee"
  }
  public cost(): number {
    return 0.89
  }
} 
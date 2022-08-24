import { Acessories } from "../abstract-class/accessories";
import { Smartphone } from "../abstract-class/smartphone";

export class Phone extends Acessories {
  constructor(smartphone: Smartphone) {
    super()
    this.description = ", Fones"
    this.smarthphone = smartphone
  }
  public getDescription(): string {
    return this.smarthphone.description + this.description
  }
  public getCost(): number {
    return this.smarthphone.getCost() + 79.99
  }

}
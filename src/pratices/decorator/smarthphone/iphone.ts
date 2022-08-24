import { Smartphone } from "../abstract-class/smartphone";

export class Iphone extends Smartphone {
  description: string = 'Iphone X'

  getDescription(): string {
    return this.description
  }
  getCost(): number {
    return 7000
  }

}
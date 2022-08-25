import { Cheese } from "../../../interfaces/ingredients"

export class MussarelaCheese implements Cheese {
  name: string = "mussarela cheese"
  getName(): string {
    return this.name  
  }
}
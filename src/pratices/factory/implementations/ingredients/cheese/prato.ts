import { Cheese } from "../../../interfaces/ingredients"

export class PratoCheese implements Cheese {
  name: string = "prato cheese"
  getName(): string {
    return this.name  
  }
}
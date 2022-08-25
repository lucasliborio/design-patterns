import { Dough } from "../../../interfaces/ingredients"

export class DoughNormal implements Dough {
  name: string = "borda normal"
  getName(): string {
    return this.name  
  }
}
import { Dough } from "../../../interfaces/ingredients"

export class DoughRecheada implements Dough {
  name: string = "borda recheada"
  getName(): string {
    return this.name  
  }
}
import { Sauce } from "../../../interfaces/ingredients"

export class TomatoSauce implements Sauce {
  name: string = "tomato sauce"
  getName(): string {
    return this.name  
  }
}
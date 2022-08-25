import { Sauce } from "../../../interfaces/ingredients";

export class MarinaraSauce implements Sauce {
  name: string = "marinara sauce"
  getName(): string {
    return this.name  
  }
}
import { IngredientFactory } from "../../abstract-factory/ingredient-factory";
import { Cheese, Dough, Sauce } from "../../interfaces/ingredients";
import { MussarelaCheese } from "../ingredients/cheese/mussarela";
import { PratoCheese } from "../ingredients/cheese/prato";
import { DoughNormal } from "../ingredients/dough/normal";
import { DoughRecheada } from "../ingredients/dough/recheada";
import { MarinaraSauce } from "../ingredients/sauce/marinara";
import { TomatoSauce } from "../ingredients/sauce/tomato";

export class NandinhoIngredientFactory implements IngredientFactory {
  getCheese(type: string): Cheese {
    let cheese!: Cheese
    switch (type) {
     
      case "mussarela":
        cheese = new MussarelaCheese()
        break
      case "prato":
        cheese = new PratoCheese()
        break
      default:
        break
    }
    console.log(cheese)
    return cheese
  }
  getSauce(type: string): Sauce {
    let sauce!: Sauce
    switch (type) {
      case "tomato":
        sauce = new TomatoSauce()
        break
      case "marinara":
        sauce = new MarinaraSauce()
        break
      default:
        break
    }
    console.log(sauce)
    return sauce

  }
  getDough(type: string): Dough {
    let dough!: Dough
    switch (type) {
      case "borda-recheada":
        dough = new DoughNormal()
        break
      case "borda-normal":
        dough = new DoughRecheada()
        break
      default:
        break
    }
    console.log(dough)
    return dough
  }
}
import { Pizza } from "../../interfaces/pizza-v2";

export class SsaPortuguesaPizza extends Pizza {
  name: string = "Pizza Portuguesa"
  dough: string = "Massa crocante"
  sauce: string = "Delicioso molho de tomate"
  toppings: string[] = ["Oregano, Mussarela Ralada, Ovos cozidos"]
}
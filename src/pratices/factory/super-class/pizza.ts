import { Cheese, Dough, Ingredients, IngredientsOption, Sauce } from "../interfaces/ingredients";

export abstract class Pizza {
  sauce!: Sauce
  dough!: Dough
  cheese!: Cheese
  name!: string
  cut(): void {
    console.log('Cutting in slices')
  }
  box(): void {
    console.log('Putting in the box')
  }
  getName(): string {
    return `${this.name} com ${this.cheese.getName()}, ${this.sauce.getName()} e ${this.dough.getName()}`
  }
  abstract prepare(ingredientesOption: IngredientsOption): void
}
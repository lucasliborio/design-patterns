import { Cheese, Dough, IngredientsOption, Sauce } from "../interfaces/ingredients";

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
    return `${this.name} with ${this.cheese.getName()}, ${this.sauce.getName()} and ${this.dough.getName()}`
  }
  abstract prepare(ingredientesOption: IngredientsOption): void
}
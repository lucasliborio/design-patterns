import { QuackBehavior } from "../../../behavior-interfaces/quack-behavior";

export class Squeak implements QuackBehavior {
  quack(): void {
    console.log('Squeeeaak')
  }
}
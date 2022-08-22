import { QuackBehavior } from "../../../behavior-interfaces/quack-behavior";

export class Quack implements QuackBehavior {
  quack(): void {
    console.log('Quaaack')
  }
}
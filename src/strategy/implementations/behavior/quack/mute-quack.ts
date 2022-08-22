import { QuackBehavior } from "../../../behavior-interfaces/quack-behavior";

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('Silence !!!')
  }
}
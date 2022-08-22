import { FlyBehavior } from "../behavior-interfaces/fly-behavior";
import { QuackBehavior } from "../behavior-interfaces/quack-behavior";

export abstract class Duck {
  constructor(
    private quackBehavior: QuackBehavior,
    private flyBehavior: FlyBehavior
  ) { }

  performQuack() {
    this.quackBehavior.quack()
  }
  performFly() {
    this.flyBehavior.fly()
  }
}
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
  setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb
  }
  setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb
  }
}
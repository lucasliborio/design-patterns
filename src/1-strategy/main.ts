import { NoFly } from "./implementations/behavior/fly/no-fly";
import { MallardDuck } from "./implementations/ducks/mallard-duck";

const mallardDuck = new MallardDuck()
mallardDuck.performFly()
mallardDuck.performQuack()

mallardDuck.setFlyBehavior(new NoFly())
mallardDuck.performFly()
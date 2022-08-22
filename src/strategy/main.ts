import { NoFly } from "./implementations/behavior/fly/no-fly";
import { Quack } from "./implementations/behavior/quack/quack";
import { MallardDuck } from "./implementations/ducks/mallard-duck";

const mallardDuck = new MallardDuck(new Quack(), new NoFly())
mallardDuck.performFly()
mallardDuck.performQuack()
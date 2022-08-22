
import { Duck } from "../../superclass/duck-class";
import { FlyWithWings } from "../behavior/fly/fly-with-wings";
import { Squeak } from "../behavior/quack/squack";

export class MallardDuck extends Duck {
  constructor() {
    super(new Squeak(), new FlyWithWings())
  }
}
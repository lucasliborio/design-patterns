import { FlyBehavior } from "../../../behavior-interfaces/fly-behavior";

export class NoFly implements FlyBehavior {
  fly(): void {
    console.log('Can\'t Fly Bro, Sorry')
  }
}
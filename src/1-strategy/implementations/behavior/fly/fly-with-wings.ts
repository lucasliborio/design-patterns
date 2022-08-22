import { FlyBehavior } from "../../../behavior-interfaces/fly-behavior";

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log('Fly with my wings')
  }
}
import { Light } from "../interfaces/receivers/light";

export class LightReceiver implements Light {

  on(): void {
    console.log('Light is on')
  }
  off(): void {
    console.log('Light is off')
  }
}
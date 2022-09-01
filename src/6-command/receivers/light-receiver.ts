import { Light } from "../interfaces/receivers/ligth";

export class LightReceiver implements Light {

  on(): void {
    console.log('Light is on')
  }
  off(): void {
    console.log('Light is off')
  }
}
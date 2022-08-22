import { Race } from "../../interfaces/race";
import { WeaponBehavior } from "../../interfaces/weapon-behavior";

export class Sword implements WeaponBehavior {
  constructor(
    public name: string,
    public forRace: Race[]
  ) { }
  useWeapon(): void {
    console.log(`Atacar com a ${this.name}`)
  }

}
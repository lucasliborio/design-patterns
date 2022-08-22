import { Race } from "../../interfaces/race";
import { WeaponBehavior } from "../../interfaces/weapon-behavior";

export class Hands implements WeaponBehavior {
  public name: string = "Hands"
  public forRace: Race[] = ["ALL"]
  
  useWeapon(): void {
    console.log(`Atacar com ${this.name}`)
  }

}
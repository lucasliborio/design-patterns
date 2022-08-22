import { Race } from "../interfaces/race";
import { WeaponBehavior } from "../interfaces/weapon-behavior";

export class Character {
  protected weapon!: WeaponBehavior
  protected name!: string
  protected race!: Race

  equipWeapon(weapon: WeaponBehavior): void {
    weapon.forRace.includes(this.race) ? this.weapon = weapon : console.log('cant equipe this weapon')
    this.actualWeapon
  }
  actualWeapon(): void {
    console.log(`My actual weapon is ${this.weapon.name}`)
  }
  stats() {
    console.log(`My name is : ${this.name}\nIm holding ${this.weapon}\nMy race is ${this.race}`)
  }
  figth() {
    this.weapon.useWeapon()
  }
} 
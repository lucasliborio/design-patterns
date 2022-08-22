import { Character } from "../../class/character";
import { WeaponBehavior } from "../../interfaces/weapon-behavior";
import { Hands } from "../weapon/hands";

export class Elf extends Character {
  constructor(name:string){
    super()
    this.name = name,
    this.race = 'ELF'
    this.weapon = new Hands()
  }
}
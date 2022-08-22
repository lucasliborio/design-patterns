import { Character } from "./class/character";
import { Elf } from "./implementations/character/elf";
import { Sword } from "./implementations/weapon/sword";

const elf = new Elf('ExitDown')
elf.actualWeapon() // My actual weapon is Hands
const sword = new Sword('Flaming Sword', ['ELF', "DARKELF"]) 
elf.equipWeapon(sword)
elf.actualWeapon() // My actual weapon is Flaming Sword
elf.figth() // Atacar com a Flaming Sword
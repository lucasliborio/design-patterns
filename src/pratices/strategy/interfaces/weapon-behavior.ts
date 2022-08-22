import { Race } from "./race"

export interface WeaponBehavior {
  name: string
  forRace: Race[]
  useWeapon(): void
}
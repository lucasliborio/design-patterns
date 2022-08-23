import { Observer } from "./observer";

export interface Subject {
  listObservers: Observer[]
  registerObserver(observer: Observer): void
  removeObserver(observer: Observer): void
  notifyObserver(type:string): void
  getInformation(type: string): string[]
}
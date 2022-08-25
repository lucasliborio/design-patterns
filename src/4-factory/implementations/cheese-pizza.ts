import { Pizza } from "../interfaces/pizza";

// DEPRACATED - USED ON FIRST SIMPLES PIZZA STORE
export class CheesePizza implements Pizza {
  prepare(): void {
    console.log('cut the cheese, put de salse')
  }
  bake(): void {
    console.log("Some bakeee.");
  }
  cut(): void {
    console.log("Cut in Slices");
  }
  box(): void {
    console.log("Put in the box");
  }

}
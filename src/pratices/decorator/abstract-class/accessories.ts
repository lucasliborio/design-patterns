import { Smartphone } from "./smartphone";

export  abstract class Acessories extends Smartphone {
  smarthphone!: Smartphone
  public abstract getDescription(): string;
  public abstract getCost(): number;

}
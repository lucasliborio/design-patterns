import { Command } from "../../interfaces/command";
import { Light } from "../../interfaces/receivers/ligth";

export class LightOffCommand implements Command {
  constructor(private light: Light) { }
  execute(): void {
    this.light.off()
  }
  undo(): void {
    this.light.on()
  }

}
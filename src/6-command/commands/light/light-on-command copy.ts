import { Command } from "../../interfaces/command";
import { Light } from "../../interfaces/receivers/light";

export class LightOnCommand implements Command {
  constructor(private light: Light) { }
  execute(): void {
    this.light.on()
  }
  undo(): void {
    this.light.off()
  }
}
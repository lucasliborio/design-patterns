import { Command } from "../../interfaces/command";

export class NoCommand implements Command {
  execute(): void {
    console.log('Its noting here to execute')
  }
  undo(): void {
    console.log('Its noting here to undo')
  }
}
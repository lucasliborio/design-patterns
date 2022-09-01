import { Command } from "../interfaces/command";

export class PaymentArea {
  commands: Command[] = []
  Invoke(command: Command) {
    this.commands.push(command)
    console.log(command.execute())
  }
  Undo(){
    console.log(this.commands.pop()?.undo())
  }
}
import { NoCommand } from "../commands/noCommand/no-command";
import { Command } from "../interfaces/command";

export class SimpleRemoteControl {
  offCommands: Command[] = Array(7)
  onCommands: Command[] = Array(7)
  undoCommand!: Command
  constructor() {

    for (let i = 0; i < this.onCommands.length; i++) {

      this.offCommands[i] = new NoCommand();
      this.onCommands[i] = new NoCommand();
    }
  }
  setCommand(slotNumber: number, onCommand: Command, offCommand: Command) {
    this.offCommands[slotNumber] = offCommand
    this.onCommands[slotNumber] = onCommand
  }

  buttonOnPressed(slotNumber: number) {
    this.onCommands[slotNumber].execute()
    this.undoCommand = this.onCommands[slotNumber]
  }
  buttonOffPressed(slotNumber: number) {
    this.offCommands[slotNumber].execute()
    this.undoCommand = this.onCommands[slotNumber]
  }
  undoButtonPressed() {
    this.undoCommand.execute()
  }
}
import { LightOffCommand } from "./commands/light/light-off-command";
import { LightOnCommand } from "./commands/light/light-on-command copy";
import { Command } from "./interfaces/command";
import { SimpleRemoteControl } from "./invoker/simple-remote-control";
import { LightReceiver } from "./receivers/light-receiver";

const remoteControl = new SimpleRemoteControl()
const light = new LightReceiver() //Object with the actual actions
const lightOnCommand = new LightOnCommand(light) //class que encapsula o comportamento do Receiver
const ligthOffCommand = new LightOffCommand(light)
remoteControl.setCommand(0, lightOnCommand, ligthOffCommand) // settting command no slot do invoker
remoteControl.buttonOnPressed(0)
remoteControl.buttonOffPressed(0)
remoteControl.undoButtonPressed()
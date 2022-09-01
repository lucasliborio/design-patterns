export interface Command {
  execute():string
  undo():void
}
import { Observer } from "../interfaces/observer";
import { Subject } from "../interfaces/subject";

export class UserMessages implements Observer {
  type: "message" | "notification" = 'message'
  constructor(private subject: Subject) {
    this.subject.registerObserver(this)
  }
  messages: string[] = []
  update(): void {
    const data = this.subject.getInformation('message')
    data.map(x => {
      this.messages.push(x)
    })
  }

}
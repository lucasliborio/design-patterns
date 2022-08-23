import { Observer } from "../interfaces/observer";
import { Subject } from "../interfaces/subject";

export class UserNotification implements Observer {
  type: "message" | "notification" = 'notification'
  constructor(private subject: Subject) { 
    this.subject.registerObserver(this)
  }
  notification: string[] = []
  update(): void {
    const data = this.subject.getInformation('notification')
    data.map(x => {
      this.notification.push(x)
    })
  }

}
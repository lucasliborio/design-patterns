import { Observer } from "../interfaces/observer";
import { SocialMedia } from "../interfaces/social-media";
import { Subject } from "../interfaces/subject";

export class Facebook implements SocialMedia, Subject {
  listObservers: Observer[] = []
  notification: string[] = []
  messages: string[] = []
  
  receiveNotification(notification: string): void {
    this.notification.push(notification)
    this.notifyObserver('notification')
  }
  receiveMessage(message: string): void {
    this.messages.push(message)
    this.notifyObserver('message')
  }
  registerObserver(observer: Observer): void {
    this.listObservers.push(observer)
  }
  removeObserver(observer: Observer): void {
    this.listObservers.splice(this.listObservers.indexOf(observer), 1)
  }
  getInformation(type: string): string[] {
    if (type === "message") {
      return this.messages 
    }
    if (type === "notification") return this.notification
    else {
      return null as unknown as string[]
    }
  }
  notifyObserver(type: string): void {
    for (let observer of this.listObservers) {
      if (observer.type === type) observer.update()
    }
  }
}
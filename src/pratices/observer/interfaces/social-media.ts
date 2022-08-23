export interface SocialMedia {
  notification: string[]
  messages: string[]
  receiveNotification(notification: string):void
  receiveMessage(message: string):void
}
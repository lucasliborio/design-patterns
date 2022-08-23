import { Facebook } from "./api/facebook";
import { UserNotification } from "./observer/user-notification";
import { UserMessages } from "./observer/user-message";

const api = new Facebook()
const userNotification = new UserNotification(api)
const userMessages = new UserMessages(api)
api.receiveNotification("Some notification")
api.receiveMessage('Some message')

console.log(userMessages.messages)
console.log(userNotification.notification)

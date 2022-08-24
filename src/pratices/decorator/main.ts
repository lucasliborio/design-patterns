import { Phone } from "./accessories/phone"
import { Iphone } from "./smarthphone/iphone"


let smarthphone = new Iphone()
console.log(smarthphone.getCost())
smarthphone = new Phone(smarthphone)
console.log(smarthphone.getCost())
console.log(smarthphone.getDescription())
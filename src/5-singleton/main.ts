import { Chocolateboiler } from "./singleton/chocolate-boiler";
import { Counter } from "./singleton/counter";

//AQUI NOS TEMOS SOMENTE UMA INSTANCIA MESMO INSTANCIANDO.
const chocolateBoiler = Chocolateboiler.getInstance()
console.log(chocolateBoiler) // Chocolateboiler { empty: true, boiled: false }
chocolateBoiler.fill()
console.log(chocolateBoiler) // Chocolateboiler { empty: false, boiled: false }
const chocolateBoiler1 = Chocolateboiler.getInstance()
console.log(chocolateBoiler1) // Chocolateboiler { empty: false, boiled: false }

const counter =  Counter.getInstance()
counter.add()
counter.add()
console.log(counter) //{counter: 2}
const counter1 =  Counter.getInstance()
counter.add()
console.log(counter1)




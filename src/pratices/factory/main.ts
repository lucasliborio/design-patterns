import { VitorinosPizzaStore } from "./implementations/store/vitorinos-pizza-store";

const vitorinosPizzaStore = new VitorinosPizzaStore()
const pizza = vitorinosPizzaStore.orderPizza('calabresa', {
  sauce: 'marinara',
  cheese:'mussarela',
  dough: 'borda-normal'  
})
console.log(pizza.getName())
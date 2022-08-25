export interface Sauce {
  getName(): string
}
export interface Dough {
  getName(): string
 }
export interface Cheese { 
  getName(): string
}

export interface Ingredients {
  sauce: Sauce
  dough: Dough
  cheese: Cheese
}

export interface IngredientsOption {
  sauce: "tomato" | "marinara"
  cheese: "mussarela" | "prato"
  dough: "borda-recheada" | "borda-normal"
}
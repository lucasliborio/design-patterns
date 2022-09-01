import { Bank } from "../interfaces/bank";

export class Nubank implements Bank {
  balance = 50
  getBalance(): number {
    return this.balance
  }
  getBankAccount(id: number): boolean {
    return [3, 5, 7, 9].includes(id)
  }
  debitOnBalance(value: number):number{
    this.balance = this.balance - value
    return this.balance
  }
  addOnBalance(value: number):number{
    this.balance = this.balance + value
    return this.balance
  }
}
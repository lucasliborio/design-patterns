import { Bank } from "../interfaces/bank";
import { Command } from "../interfaces/command";

export class CheckAccount implements Command {
  constructor(
    private bank: Bank,
    private productValue: number,
    private accountId: number
  ) { }

  execute(): string {
    if (this.bank.getBankAccount(this.accountId)) {
      let answer = this.bank.getBalance() < this.productValue ? "voce não pode comprar esse produto" : `seu novo saldo é ${this.bank.debitOnBalance(this.productValue)}`
      return answer
    } 
    return 'sua conta não existe'
  }
  undo() {
    return `transação desfeita, seu saldo é ${this.bank.addOnBalance(this.productValue)}`
  }
}
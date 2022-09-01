export interface Bank {
  getBalance():number
  getBankAccount(id: number): boolean
  debitOnBalance(value:number): number
  addOnBalance(value: number):number
}
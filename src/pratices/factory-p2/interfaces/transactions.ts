export abstract class Transaction {
  category!: string
  totalValue!: number
  typeTransaction!: string
  closeFatura!: Date
  abstract createTransaction(type: string):void
}
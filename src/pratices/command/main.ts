import { CheckAccountCommand } from "./commands/check-bank-account-balance";
import { PaymentArea } from "./invoker/payment-area";
import { Nubank } from "./receiver/nubank";

export class PaymentService {
  static checkAccountForPayment() {
    const paymentArea = new PaymentArea()
    const nubank = new Nubank()
    const productValue = 29
    const accountId = 5
    const command = new CheckAccountCommand(nubank, productValue, accountId)
    paymentArea.Invoke(command)
    paymentArea.Undo()
  }
}
PaymentService.checkAccountForPayment()
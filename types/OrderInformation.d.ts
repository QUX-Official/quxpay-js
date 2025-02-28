declare module "quxpay-js" {
  export class OrderInformation {
    amount: number;
    invoiceNumber: string;
    freight: number;
    tax: number;

    constructor();

    // Setters
    setAmount(amount: number): void;
    setInvoiceNumber(invoiceNumber: string): void;
    setFreight(freight: number = 0): void;
    setTax(tax: number = 0): void;

    // Getters
    getAmount(): number;
    getInvoiceNumber(): string;
    getFreight(): number;
    getTax(): number;
  }
}

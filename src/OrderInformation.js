export class OrderInformation {
    /** @type {number} The amount of the order. */
    amount;

    /** @type {string} The invoice number associated with the order. */
    invoiceNumber;

    /** @type {number} The shipping fee for the order (freight). */
    freight;

    /** @type {number} The tax applied to the order. */
    tax;

    /**
     * Sets the total amount of the order.
     * @param {number} amount - The amount to be set.
     */
    setAmount(amount) {
        this.amount = amount;
    }

    /**
     * Sets the invoice number for the order.
     * @param {string} invoiceNumber - The invoice number to be set.
     */
    setInvoiceNumber(invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }

    /**
     * Sets the freight (shipping fee) for the order.
     * @param {number} [freight=0] - The freight charge (default is 0).
     */
    setFreight(freight = 0) {
        this.freight = freight;
    }

    /**
     * Sets the tax amount for the order.
     * @param {number} [tax=0] - The tax amount (default is 0).
     */
    setTax(tax = 0) {
        this.tax = tax;
    }

    /**
     * Retrieves the total amount of the order.
     * @returns {number} The total amount.
     */
    getAmount() {
        return this.amount;
    }

    /**
     * Retrieves the invoice number of the order.
     * @returns {string} The invoice number.
     */
    getInvoiceNumber() {
        return this.invoiceNumber;
    }

    /**
     * Retrieves the freight (shipping fee) for the order.
     * @returns {number} The freight amount.
     */
    getFreight() {
        return this.freight;
    }

    /**
     * Retrieves the tax amount for the order.
     * @returns {number} The tax amount.
     */
    getTax() {
        return this.tax;
    }
}
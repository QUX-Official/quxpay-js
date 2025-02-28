export class LineItem {
    /** @type {Array<Object>} Stores standard products */
    products = [];

    /** @type {Array<Object>} Stores subscription-based products */
    productsSubscription = [];

    /** @type {Array<Object>} Stores all line items */
    lineItems = [];

    /**
     * Adds a line item to the order.
     * @param {number} id - The unique identifier of the product.
     * @param {number} quantity - The quantity of the product.
     * @param {string} productName - The name of the product.
     * @param {number} price - The price of the product.
     * @param {boolean} [subscription=false] - Indicates if the product is a subscription-based item.
     */
    setLineItems(id, quantity, productName, price, subscription = false) {
        // set line items

        let items = {
            'id': id,
            'quantity': quantity,
            'product_price': price,
            'product_name': productName,
            'subscription': subscription,
        };

        this.lineItems.push(items);

        if (subscription) {
            this.setProductsWithSubscription(items);
        } else {
            this.setProducts(items);
        }
    }

    /**
     * Adds a product to the non-subscription products list.
     * @param {Object} items - The product details.
     */
    setProducts(items) {
        // set products 
        this.products.push(items);
    }

    /**
     * Adds a product to the subscription-based products list.
     * @param {Object} items - The product details.
     */
    setProductsWithSubscription(items) {
        // set products checkout
        this.productsSubscription.push(items);
    }

    /**
     * Retrieves all line items.
     * @returns {Array<Object>} The list of all line items.
     */
    getLineItems() {
        return this.lineItems;
    }

    /**
     * Retrieves all non-subscription products.
     * @returns {Array<Object>} The list of non-subscription products.
     */
    getProducts() {
        return this.products;
    }

    /**
     * Retrieves all subscription-based products.
     * @returns {Array<Object>} The list of subscription-based products.
     */
    getProductsSubscription() {
        return this.productsSubscription;
    }
}
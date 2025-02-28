declare module "quxpay-js" {
  interface Product {
    id: string;
    quantity: number;
    product_price: string;
    product_name: number;
    subscription: boolean;
  }

  interface Subscription {
    id: string;
    quantity: number;
    product_price: string;
    product_name: number;
    subscription: boolean;
  }

  interface LineItem {
    id: string;
    quantity: number;
    product_price: string;
    product_name: number;
    subscription: boolean;
  }

  export class LineItem {
    products: Product[];
    productsSubscription: Subscription[];
    lineItems: LineItem[];

    constructor();

    // Setters
    setLineItems(
      id?: string,
      quantity?: number,
      productName?: string,
      price?: number,
      subscription?: boolean = false
    ): void;
    setProducts(items: Product): void;
    setProductsWithSubscription(items: Subscription): void;

    // Getters
    getLineItems(): LineItem[];
    getProducts(): Product[];
    getProductsSubscription(): Subscription[];
  }
}

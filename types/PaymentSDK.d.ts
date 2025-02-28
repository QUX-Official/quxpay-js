declare module "quxpay-js" {
  export class PaymentSDK {
    timeStamp: any;
    cancelUrl: string;
    successUrl: string;
    testMode: boolean;
    appKey: string;
    secretKey: string;
    totalAmountInItems: number;

    // Setters
    setCancelUrl(url: string): void;
    setSuccessUrl(url: string): void;
    setTestMode(testMode: boolean = false): void;
    setAppKey(key: string): void;
    setSecretKey(key: string): void;
    setTimeStamp(timeStamp: any): void;

    // Getters
    getAppKey(): any;
    getSecretKey(): any;
    getSuccessUrl(): any;
    getCancelUrl(): any;
    getTestMode(): boolean;

    generateRedirectURL(): any;

    checkTotalAmount(): void | never;

    validateArgs(): void | never;
  }
}

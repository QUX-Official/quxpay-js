declare module "quxpay-js" {
  export class ShippingInformation {
    shippingFirstName: string;
    shippingLastName: string;
    shippingCompany: string;
    shippingAddress: string;
    shippingCountry: string;
    shippingState: string;
    shippingZip: string;
    shippingCity: string;
    shippingPhone: string;
    shippingEmail: string;

    constructor();

    // Setters
    setShippingInfo(shipping: {
      firstName?: string;
      lastName?: string;
      company?: string;
      address?: string;
      country?: string;
      state?: string;
      city?: string;
      zip?: string;
      phone?: string;
      email?: string;
    }): void;
    setShippingFirstName(firstName: string): void;
    setShippingLastname(lastName: string): void;
    setShippingCompany(company: string): void;
    setShippingAddress(address: string): void;
    setShippingCountry(country: string): void;
    setShippingState(state: string): void;
    setShippingCity(city: string): void;
    setShippingZip(zip: string): void;
    setShippingPhone(phone: string): void;
    setShippingEmail(email: string): void;

    // Getters
    getShippingFirstName(): string;
    getShippingLastname(): string;
    getShippingCompany(): string;
    getShippingAddress(): string;
    getShippingCountry(): string;
    getShippingState(): string;
    getShippingCity(): string;
    getShippingZip(): string;
    getShippingPhone(): string;
    getShippingEmail(): string;
  }
}

declare module "quxpay-js" {
  export class BillerInformation {
    billerFirstName: string;
    billerLastName: string;
    billerCompany: string;
    billerAddress: string;
    billerCountry: string;
    billerState: string;
    billerZip: string;
    billerCity: string;
    billerPhone: string;
    billerEmail: string;

    constructor();

    // Setters
    setBillerInfo(biller: {
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
    setBillerFirstName(firstName: string): void;
    setBillerLastName(lastName: string): void;
    setBillerCompany(company: string): void;
    setBillerAddress(address: string): void;
    setBillerCountry(country: string): void;
    setBillerState(state: string): void;
    setBillerCity(city: string): void;
    setBillerZip(zip: string): void;
    setBillerPhone(phone: string): void;
    setBillerEmail(email: string): void;

    // Getters
    getBillerFirstName(): string;
    getBillerLastname(): string;
    getBillerCompany(): string;
    getBillerAddress(): string;
    getBillerCountry(): string;
    getBillerState(): string;
    getBillerCity(): string;
    getBillerZip(): string;
    getBillerPhone(): string;
    getBillerEmail(): string;
  }
}

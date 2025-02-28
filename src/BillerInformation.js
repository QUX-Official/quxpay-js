export class BillerInformation {
    billerFirstName;
    billerLastName;
    billerCompany;
    billerAddress;
    billerCountry;
    billerState;
    billerZip;
    billerCity;
    billerPhone;
    billerEmail;

    /**
     * Sets the biller's information.
     * @param {Object} biller - The biller's details.
     * @param {string} [biller.firstName=''] - The first name of the biller.
     * @param {string} [biller.lastName=''] - The last name of the biller.
     * @param {string} [biller.company=''] - The company name of the biller.
     * @param {string} [biller.address=''] - The address of the biller.
     * @param {string} [biller.country=''] - The country of the biller.
     * @param {string} [biller.state=''] - The state of the biller.
     * @param {string} [biller.city=''] - The city of the biller.
     * @param {string} [biller.zip=''] - The ZIP code of the biller.
     * @param {string} [biller.phone=''] - The phone number of the biller.
     * @param {string} [biller.email=''] - The email address of the biller.
     */
    setBillerInfo(biller) {
        let { firstName = '', lastName = '', company = '', address = '', country = '', state = '', city = '', zip = '', phone = '', email = '' } = biller;

        this.setBillerFirstName(firstName);
        this.setBillerLastName(lastName);
        this.setBillerCompany(company);
        this.setBillerAddress(address);
        this.setBillerCountry(country);
        this.setBillerState(state);
        this.setBillerCity(city);
        this.setBillerZip(zip);
        this.setBillerPhone(phone);
        this.setBillerEmail(email);
    }

    /**
     * Sets the first name of the biller.
     * @param {string} firstName - The first name of the biller.
     */
    setBillerFirstName(firstName) {
        this.billerFirstName = firstName;
    }

    /**
     * Sets the last name of the biller.
     * @param {string} lastName - The last name of the biller.
     */
    setBillerLastName(lastName) {
        this.billerLastName = lastName;
    }

    /**
    * Sets the company name of the biller.
    * @param {string} company - The company name of the biller.
    */
    setBillerCompany(company) {
        this.billerCompany = company;
    }

    /**
     * Sets the address of the biller.
     * @param {string} address - The address of the biller.
     */
    setBillerAddress(address) {
        this.billerAddress = address;
    }

    /**
     * Sets the country of the biller.
     * @param {string} [country='US'] - The country of the biller (default: 'US').
     */
    setBillerCountry(country = 'US') {
        this.billerCountry = country;
    }

    /**
     * Sets the state of the biller.
     * @param {string} state - The state abbreviation of the biller.
     */
    setBillerState(state) {
        this.billerState = state;
    }

    /**
     * Sets the city of the biller.
     * @param {string} city - The city of the biller.
     */
    setBillerCity(city) {
        this.billerCity = city;
    }

    /**
     * Sets the ZIP code of the biller.
     * @param {string} zip - The ZIP code of the biller.
     */
    setBillerZip(zip) {
        this.billerZip = zip;
    }

    /**
     * Sets the phone number of the biller.
     * @param {string} phone - The phone number of the biller.
     */
    setBillerPhone(phone) {
        this.billerPhone = phone;
    }

    /**
     * Sets the email address of the biller.
     * @param {string} email - The email address of the biller.
     */
    setBillerEmail(email) {
        this.billerEmail = email;
    }

    /**
     * Gets the first name of the biller.
     * @returns {string} The biller's first name.
     */
    getBillerFirstName() {
        return this.billerFirstName;
    }

    /**
     * Gets the last name of the biller.
     * @returns {string} The biller's last name.
     */
    getBillerLastname() {
        return this.billerLastName;
    }

    /**
     * Gets the company name of the biller.
     * @returns {string} The biller's company name.
     */
    getBillerCompany() {
        return this.billerCompany;
    }

    /**
     * Gets the address of the biller.
     * @returns {string} The biller's address.
     */
    getBillerAddress() {
        return this.billerAddress;
    }

    /**
     * Gets the country of the biller.
     * @returns {string} The biller's country.
     */
    getBillerCountry() {
        return this.billerCountry;
    }

    /**
     * Gets the state of the biller.
     * @returns {string} The biller's state.
     */
    getBillerState() {
        return this.billerState;
    }

    /**
     * Gets the city of the biller.
     * @returns {string} The biller's city.
     */
    getBillerCity() {
        return this.billerCity;
    }

    /**
     * Gets the ZIP code of the biller.
     * @returns {string} The biller's ZIP code.
     */
    getBillerZip() {
        return this.billerZip;
    }

    /**
     * Gets the phone number of the biller.
     * @returns {string} The biller's phone number.
     */
    getBillerPhone() {
        return this.billerPhone;
    }

    /**
     * Gets the email address of the biller.
     * @returns {string} The biller's email address.
     */
    getBillerEmail() {
        return this.billerEmail;
    }
}
export class ShippingInformation {

    /** @type {string} The first name of the recipient. */
    shippingFirstName;

    /** @type {string} The last name of the recipient. */
    shippingLastName;

    /** @type {string} The company name associated with the shipment. */
    shippingCompany;

    /** @type {string} The shipping address. */
    shippingAddress;

    /** @type {string} The country of the shipping address. */
    shippingCountry;

    /** @type {string} The state or province of the shipping address. */
    shippingState;

    /** @type {string} The ZIP or postal code of the shipping address. */
    shippingZip;

    /** @type {string} The city of the shipping address. */
    shippingCity;

    /** @type {string} The recipient's phone number. */
    shippingPhone;

    /** @type {string} The recipient's email address. */
    shippingEmail;

    /**
     * Sets multiple shipping details at once.
     * @param {Object} shipping - The shipping details object.
     * @param {string} [shipping.firstName=''] - The recipient's first name.
     * @param {string} [shipping.lastName=''] - The recipient's last name.
     * @param {string} [shipping.company=''] - The company name (if applicable).
     * @param {string} [shipping.address=''] - The shipping address.
     * @param {string} [shipping.country=''] - The country of the shipping address.
     * @param {string} [shipping.state=''] - The state or province.
     * @param {string} [shipping.city=''] - The city of the shipping address.
     * @param {string} [shipping.zip=''] - The ZIP or postal code.
     * @param {string} [shipping.phone=''] - The phone number.
     * @param {string} [shipping.email=''] - The email address.
     */
    setShippingInfo(shipping) {
        let { firstName = '', lastName = '', company = '', address = '', country = '', state = '', city = '', zip = '', phone = '', email = '' } = shipping;

        this.setShippingFirstName(firstName);
        this.setShippingLastname(lastName);
        this.setShippingCompany(company);
        this.setShippingAddress(address);
        this.setShippingCountry(country);
        this.setShippingState(state);
        this.setShippingCity(city);
        this.setShippingZip(zip);
        this.setShippingPhone(phone);
        this.setShippingEmail(email);
    }

    /**
     * Sets the recipient's first name.
     * @param {string} firstName - The first name.
     */
    setShippingFirstName(firstName) {
        this.shippingFirstName = firstName;
    }

    /**
     * Sets the recipient's last name.
     * @param {string} lastName - The last name.
     */
    setShippingLastname(lastName) {
        this.shippingLastName = lastName;
    }

    /**
     * Sets the company associated with the shipment.
     * @param {string} [company=''] - The company name.
     */
    setShippingCompany(company = '') {
        this.shippingCompany = company;
    }

    /**
     * Sets the shipping address.
     * @param {string} address - The address.
     */
    setShippingAddress(address) {
        this.shippingAddress = address;
    }

    /**
     * Sets the country for the shipping address.
     * @param {string} [country='US'] - The country (default is 'US').
     */
    setShippingCountry(country = 'US') {
        this.shippingCountry = country;
    }

    /**
     * Sets the state or province of the shipping address.
     * @param {string} state - The state or province.
     */
    setShippingState(state) {
        this.shippingState = state;
    }

    /**
     * Sets the city of the shipping address.
     * @param {string} city - The city.
     */
    setShippingCity(city) {
        this.shippingCity = city;
    }

    /**
     * Sets the ZIP or postal code of the shipping address.
     * @param {string} zip - The ZIP or postal code.
     */
    setShippingZip(zip) {
        this.shippingZip = zip;
    }

    /**
     * Sets the recipient's phone number.
     * @param {string} phone - The phone number.
     */
    setShippingPhone(phone) {
        this.shippingPhone = phone;
    }

    /**
     * Sets the recipient's email address.
     * @param {string} email - The email address.
     */
    setShippingEmail(email) {
        this.shippingEmail = email;
    }

    /**
     * Retrieves the recipient's first name.
     * @returns {string} The first name.
     */
    getShippingFirstName() {
        return this.shippingFirstName;
    }

    /**
     * Retrieves the recipient's last name.
     * @returns {string} The last name.
     */
    getShippingLastname() {
        return this.shippingLastName;
    }

    /**
     * Retrieves the company associated with the shipment.
     * @returns {string} The company name.
     */
    getShippingCompany() {
        return this.shippingCompany;
    }

    /**
     * Retrieves the shipping address.
     * @returns {string} The shipping address.
     */
    getShippingAddress() {
        return this.shippingAddress;
    }

    /**
     * Retrieves the country of the shipping address.
     * @returns {string} The country.
     */
    getShippingCountry() {
        return this.shippingCountry;
    }

    /**
     * Retrieves the state or province of the shipping address.
     * @returns {string} The state or province.
     */
    getShippingState() {
        return this.shippingState;
    }

    /**
     * Retrieves the city of the shipping address.
     * @returns {string} The city.
     */
    getShippingCity() {
        return this.shippingCity;
    }

    /**
     * Retrieves the ZIP or postal code of the shipping address.
     * @returns {string} The ZIP or postal code.
     */
    getShippingZip() {
        return this.shippingZip;
    }

    /**
     * Retrieves the recipient's phone number.
     * @returns {string} The phone number.
     */
    getShippingPhone() {
        return this.shippingPhone;
    }

    /**
     * Retrieves the recipient's email address.
     * @returns {string} The email address.
     */
    getShippingEmail() {
        return this.shippingEmail;
    }
}
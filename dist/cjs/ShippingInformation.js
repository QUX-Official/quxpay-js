"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShippingInformation = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ShippingInformation = exports.ShippingInformation = /*#__PURE__*/function () {
  function ShippingInformation() {
    _classCallCheck(this, ShippingInformation);
    /** @type {string} The first name of the recipient. */
    _defineProperty(this, "shippingFirstName", void 0);
    /** @type {string} The last name of the recipient. */
    _defineProperty(this, "shippingLastName", void 0);
    /** @type {string} The company name associated with the shipment. */
    _defineProperty(this, "shippingCompany", void 0);
    /** @type {string} The shipping address. */
    _defineProperty(this, "shippingAddress", void 0);
    /** @type {string} The country of the shipping address. */
    _defineProperty(this, "shippingCountry", void 0);
    /** @type {string} The state or province of the shipping address. */
    _defineProperty(this, "shippingState", void 0);
    /** @type {string} The ZIP or postal code of the shipping address. */
    _defineProperty(this, "shippingZip", void 0);
    /** @type {string} The city of the shipping address. */
    _defineProperty(this, "shippingCity", void 0);
    /** @type {string} The recipient's phone number. */
    _defineProperty(this, "shippingPhone", void 0);
    /** @type {string} The recipient's email address. */
    _defineProperty(this, "shippingEmail", void 0);
  }
  return _createClass(ShippingInformation, [{
    key: "setShippingInfo",
    value:
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
    function setShippingInfo(shipping) {
      var _shipping$firstName = shipping.firstName,
        firstName = _shipping$firstName === void 0 ? '' : _shipping$firstName,
        _shipping$lastName = shipping.lastName,
        lastName = _shipping$lastName === void 0 ? '' : _shipping$lastName,
        _shipping$company = shipping.company,
        company = _shipping$company === void 0 ? '' : _shipping$company,
        _shipping$address = shipping.address,
        address = _shipping$address === void 0 ? '' : _shipping$address,
        _shipping$country = shipping.country,
        country = _shipping$country === void 0 ? '' : _shipping$country,
        _shipping$state = shipping.state,
        state = _shipping$state === void 0 ? '' : _shipping$state,
        _shipping$city = shipping.city,
        city = _shipping$city === void 0 ? '' : _shipping$city,
        _shipping$zip = shipping.zip,
        zip = _shipping$zip === void 0 ? '' : _shipping$zip,
        _shipping$phone = shipping.phone,
        phone = _shipping$phone === void 0 ? '' : _shipping$phone,
        _shipping$email = shipping.email,
        email = _shipping$email === void 0 ? '' : _shipping$email;
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
  }, {
    key: "setShippingFirstName",
    value: function setShippingFirstName(firstName) {
      this.shippingFirstName = firstName;
    }

    /**
     * Sets the recipient's last name.
     * @param {string} lastName - The last name.
     */
  }, {
    key: "setShippingLastname",
    value: function setShippingLastname(lastName) {
      this.shippingLastName = lastName;
    }

    /**
     * Sets the company associated with the shipment.
     * @param {string} [company=''] - The company name.
     */
  }, {
    key: "setShippingCompany",
    value: function setShippingCompany() {
      var company = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.shippingCompany = company;
    }

    /**
     * Sets the shipping address.
     * @param {string} address - The address.
     */
  }, {
    key: "setShippingAddress",
    value: function setShippingAddress(address) {
      this.shippingAddress = address;
    }

    /**
     * Sets the country for the shipping address.
     * @param {string} [country='US'] - The country (default is 'US').
     */
  }, {
    key: "setShippingCountry",
    value: function setShippingCountry() {
      var country = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'US';
      this.shippingCountry = country;
    }

    /**
     * Sets the state or province of the shipping address.
     * @param {string} state - The state or province.
     */
  }, {
    key: "setShippingState",
    value: function setShippingState(state) {
      this.shippingState = state;
    }

    /**
     * Sets the city of the shipping address.
     * @param {string} city - The city.
     */
  }, {
    key: "setShippingCity",
    value: function setShippingCity(city) {
      this.shippingCity = city;
    }

    /**
     * Sets the ZIP or postal code of the shipping address.
     * @param {string} zip - The ZIP or postal code.
     */
  }, {
    key: "setShippingZip",
    value: function setShippingZip(zip) {
      this.shippingZip = zip;
    }

    /**
     * Sets the recipient's phone number.
     * @param {string} phone - The phone number.
     */
  }, {
    key: "setShippingPhone",
    value: function setShippingPhone(phone) {
      this.shippingPhone = phone;
    }

    /**
     * Sets the recipient's email address.
     * @param {string} email - The email address.
     */
  }, {
    key: "setShippingEmail",
    value: function setShippingEmail(email) {
      this.shippingEmail = email;
    }

    /**
     * Retrieves the recipient's first name.
     * @returns {string} The first name.
     */
  }, {
    key: "getShippingFirstName",
    value: function getShippingFirstName() {
      return this.shippingFirstName;
    }

    /**
     * Retrieves the recipient's last name.
     * @returns {string} The last name.
     */
  }, {
    key: "getShippingLastname",
    value: function getShippingLastname() {
      return this.shippingLastName;
    }

    /**
     * Retrieves the company associated with the shipment.
     * @returns {string} The company name.
     */
  }, {
    key: "getShippingCompany",
    value: function getShippingCompany() {
      return this.shippingCompany;
    }

    /**
     * Retrieves the shipping address.
     * @returns {string} The shipping address.
     */
  }, {
    key: "getShippingAddress",
    value: function getShippingAddress() {
      return this.shippingAddress;
    }

    /**
     * Retrieves the country of the shipping address.
     * @returns {string} The country.
     */
  }, {
    key: "getShippingCountry",
    value: function getShippingCountry() {
      return this.shippingCountry;
    }

    /**
     * Retrieves the state or province of the shipping address.
     * @returns {string} The state or province.
     */
  }, {
    key: "getShippingState",
    value: function getShippingState() {
      return this.shippingState;
    }

    /**
     * Retrieves the city of the shipping address.
     * @returns {string} The city.
     */
  }, {
    key: "getShippingCity",
    value: function getShippingCity() {
      return this.shippingCity;
    }

    /**
     * Retrieves the ZIP or postal code of the shipping address.
     * @returns {string} The ZIP or postal code.
     */
  }, {
    key: "getShippingZip",
    value: function getShippingZip() {
      return this.shippingZip;
    }

    /**
     * Retrieves the recipient's phone number.
     * @returns {string} The phone number.
     */
  }, {
    key: "getShippingPhone",
    value: function getShippingPhone() {
      return this.shippingPhone;
    }

    /**
     * Retrieves the recipient's email address.
     * @returns {string} The email address.
     */
  }, {
    key: "getShippingEmail",
    value: function getShippingEmail() {
      return this.shippingEmail;
    }
  }]);
}();
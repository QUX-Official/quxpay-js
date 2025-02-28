function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
export var BillerInformation = /*#__PURE__*/function () {
  function BillerInformation() {
    _classCallCheck(this, BillerInformation);
    _defineProperty(this, "billerFirstName", void 0);
    _defineProperty(this, "billerLastName", void 0);
    _defineProperty(this, "billerCompany", void 0);
    _defineProperty(this, "billerAddress", void 0);
    _defineProperty(this, "billerCountry", void 0);
    _defineProperty(this, "billerState", void 0);
    _defineProperty(this, "billerZip", void 0);
    _defineProperty(this, "billerCity", void 0);
    _defineProperty(this, "billerPhone", void 0);
    _defineProperty(this, "billerEmail", void 0);
  }
  return _createClass(BillerInformation, [{
    key: "setBillerInfo",
    value:
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
    function setBillerInfo(biller) {
      var _biller$firstName = biller.firstName,
        firstName = _biller$firstName === void 0 ? '' : _biller$firstName,
        _biller$lastName = biller.lastName,
        lastName = _biller$lastName === void 0 ? '' : _biller$lastName,
        _biller$company = biller.company,
        company = _biller$company === void 0 ? '' : _biller$company,
        _biller$address = biller.address,
        address = _biller$address === void 0 ? '' : _biller$address,
        _biller$country = biller.country,
        country = _biller$country === void 0 ? '' : _biller$country,
        _biller$state = biller.state,
        state = _biller$state === void 0 ? '' : _biller$state,
        _biller$city = biller.city,
        city = _biller$city === void 0 ? '' : _biller$city,
        _biller$zip = biller.zip,
        zip = _biller$zip === void 0 ? '' : _biller$zip,
        _biller$phone = biller.phone,
        phone = _biller$phone === void 0 ? '' : _biller$phone,
        _biller$email = biller.email,
        email = _biller$email === void 0 ? '' : _biller$email;
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
  }, {
    key: "setBillerFirstName",
    value: function setBillerFirstName(firstName) {
      this.billerFirstName = firstName;
    }

    /**
     * Sets the last name of the biller.
     * @param {string} lastName - The last name of the biller.
     */
  }, {
    key: "setBillerLastName",
    value: function setBillerLastName(lastName) {
      this.billerLastName = lastName;
    }

    /**
    * Sets the company name of the biller.
    * @param {string} company - The company name of the biller.
    */
  }, {
    key: "setBillerCompany",
    value: function setBillerCompany(company) {
      this.billerCompany = company;
    }

    /**
     * Sets the address of the biller.
     * @param {string} address - The address of the biller.
     */
  }, {
    key: "setBillerAddress",
    value: function setBillerAddress(address) {
      this.billerAddress = address;
    }

    /**
     * Sets the country of the biller.
     * @param {string} [country='US'] - The country of the biller (default: 'US').
     */
  }, {
    key: "setBillerCountry",
    value: function setBillerCountry() {
      var country = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'US';
      this.billerCountry = country;
    }

    /**
     * Sets the state of the biller.
     * @param {string} state - The state abbreviation of the biller.
     */
  }, {
    key: "setBillerState",
    value: function setBillerState(state) {
      this.billerState = state;
    }

    /**
     * Sets the city of the biller.
     * @param {string} city - The city of the biller.
     */
  }, {
    key: "setBillerCity",
    value: function setBillerCity(city) {
      this.billerCity = city;
    }

    /**
     * Sets the ZIP code of the biller.
     * @param {string} zip - The ZIP code of the biller.
     */
  }, {
    key: "setBillerZip",
    value: function setBillerZip(zip) {
      this.billerZip = zip;
    }

    /**
     * Sets the phone number of the biller.
     * @param {string} phone - The phone number of the biller.
     */
  }, {
    key: "setBillerPhone",
    value: function setBillerPhone(phone) {
      this.billerPhone = phone;
    }

    /**
     * Sets the email address of the biller.
     * @param {string} email - The email address of the biller.
     */
  }, {
    key: "setBillerEmail",
    value: function setBillerEmail(email) {
      this.billerEmail = email;
    }

    /**
     * Gets the first name of the biller.
     * @returns {string} The biller's first name.
     */
  }, {
    key: "getBillerFirstName",
    value: function getBillerFirstName() {
      return this.billerFirstName;
    }

    /**
     * Gets the last name of the biller.
     * @returns {string} The biller's last name.
     */
  }, {
    key: "getBillerLastname",
    value: function getBillerLastname() {
      return this.billerLastName;
    }

    /**
     * Gets the company name of the biller.
     * @returns {string} The biller's company name.
     */
  }, {
    key: "getBillerCompany",
    value: function getBillerCompany() {
      return this.billerCompany;
    }

    /**
     * Gets the address of the biller.
     * @returns {string} The biller's address.
     */
  }, {
    key: "getBillerAddress",
    value: function getBillerAddress() {
      return this.billerAddress;
    }

    /**
     * Gets the country of the biller.
     * @returns {string} The biller's country.
     */
  }, {
    key: "getBillerCountry",
    value: function getBillerCountry() {
      return this.billerCountry;
    }

    /**
     * Gets the state of the biller.
     * @returns {string} The biller's state.
     */
  }, {
    key: "getBillerState",
    value: function getBillerState() {
      return this.billerState;
    }

    /**
     * Gets the city of the biller.
     * @returns {string} The biller's city.
     */
  }, {
    key: "getBillerCity",
    value: function getBillerCity() {
      return this.billerCity;
    }

    /**
     * Gets the ZIP code of the biller.
     * @returns {string} The biller's ZIP code.
     */
  }, {
    key: "getBillerZip",
    value: function getBillerZip() {
      return this.billerZip;
    }

    /**
     * Gets the phone number of the biller.
     * @returns {string} The biller's phone number.
     */
  }, {
    key: "getBillerPhone",
    value: function getBillerPhone() {
      return this.billerPhone;
    }

    /**
     * Gets the email address of the biller.
     * @returns {string} The biller's email address.
     */
  }, {
    key: "getBillerEmail",
    value: function getBillerEmail() {
      return this.billerEmail;
    }
  }]);
}();
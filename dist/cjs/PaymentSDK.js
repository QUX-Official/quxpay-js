"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentSDK = void 0;
var _ValidationError = require("./ValidationError.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PaymentSDK = exports.PaymentSDK = /*#__PURE__*/function () {
  /**
   * Initializes the PaymentSDK with required transaction details.
   *
   * @param {object} billerInformation - Biller's information.
   * @param {object} lineItem - Line item details including products and subscriptions.
   * @param {object} orderInformation - Order details such as amount and invoice number.
   * @param {object} shippingInformation - Shipping details.
   */
  function PaymentSDK(billerInformation, lineItem, orderInformation, shippingInformation) {
    _classCallCheck(this, PaymentSDK);
    _defineProperty(this, "timeStamp", void 0);
    _defineProperty(this, "cancelUrl", void 0);
    _defineProperty(this, "successUrl", void 0);
    _defineProperty(this, "testMode", void 0);
    _defineProperty(this, "appKey", void 0);
    _defineProperty(this, "secretKey", void 0);
    this.billerInfo = billerInformation;
    this.lineItem = lineItem;
    this.orderInfo = orderInformation;
    this.shippingInfo = shippingInformation;
  }

  /**
   * Sets the cancel URL to redirect the user if they cancel the payment.
   * @param {string} url - The cancel URL.
   */
  return _createClass(PaymentSDK, [{
    key: "setCancelUrl",
    value: function setCancelUrl(url) {
      // set cancel url if user cancel the payment in quxpay they will redirected to this url
      this.cancelUrl = url;
    }

    /**
     * Sets the success URL to redirect the user upon successful payment.
     * @param {string} url - The success URL.
     */
  }, {
    key: "setSuccessUrl",
    value: function setSuccessUrl(url) {
      // set success url if user successfully paid the items in quxpay they will redirected to this url
      this.successUrl = url;
    }

    /**
     * Enables or disables test mode.
     * @param {boolean} [testMode=false] - Whether to enable test mode.
     */
  }, {
    key: "setTestMode",
    value: function setTestMode() {
      var testMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // set test mode
      this.testMode = testMode;
    }

    /**
     * Sets the application key for authentication.
     * @param {string} key - The application key.
     */
  }, {
    key: "setAppKey",
    value: function setAppKey(key) {
      // set app key
      this.appKey = key;
    }

    /**
     * Sets the secret key for authentication.
     * @param {string} key - The secret key.
     */
  }, {
    key: "setSecretKey",
    value: function setSecretKey(key) {
      // set secret key
      this.secretKey = key;
    }

    /**
     * Sets the transaction timestamp.
     * @param {number} timeStamp - The timestamp.
     */
  }, {
    key: "setTimeStamp",
    value: function setTimeStamp(timeStamp) {
      // set time stamp
      this.timeStamp = timeStamp;
    }

    /**
     * Retrieves the application key.
     * @returns {string} The app key.
     */
  }, {
    key: "getAppKey",
    value: function getAppKey() {
      return this.appKey;
    }

    /**
     * Retrieves the secret key.
     * @returns {string} The secret key.
     */
  }, {
    key: "getSecretKey",
    value: function getSecretKey() {
      return this.secretKey;
    }

    /**
     * Retrieves the success URL.
     * @returns {string} The success URL.
     */
  }, {
    key: "getSuccessUrl",
    value: function getSuccessUrl() {
      return this.successUrl;
    }

    /**
     * Retrieves the cancel URL.
     * @returns {string} The cancel URL.
     */
  }, {
    key: "getCancelUrl",
    value: function getCancelUrl() {
      return this.cancelUrl;
    }

    /**
     * Retrieves the test mode status.
     * @returns {boolean} True if test mode is enabled, false otherwise.
     */
  }, {
    key: "getTestMode",
    value: function getTestMode() {
      return this.testMode;
    }

    /**
     * Generates a redirect URL to initiate the payment process.
     * @returns {string|object} The redirect URL or an error object in case of failure.
     */
  }, {
    key: "generateRedirectURL",
    value: function generateRedirectURL() {
      try {
        this.checkTotalAmount();
        var args = {
          'x_amount': this.orderInfo.amount,
          'x_invoice_num': this.orderInfo.invoiceNumber,
          'x_freight': this.orderInfo.freight,
          'x_tax': this.orderInfo.tax,
          'x_fp_timestamp': this.timeStamp,
          'x_first_name': this.billerInfo.billerFirstName,
          'x_last_name': this.billerInfo.billerLastName,
          'x_company': this.billerInfo.billerCompany,
          'x_address': this.billerInfo.billerAddress,
          'x_country': this.billerInfo.billerCountry,
          'x_state': this.billerInfo.billerState,
          'x_city': this.billerInfo.billerCity,
          'x_zip': this.billerInfo.billerZip,
          'x_phone': this.billerInfo.billerPhone,
          'x_email': this.billerInfo.billerEmail,
          'x_ship_to_first_name': this.shippingInfo.shippingFirstName,
          'x_ship_to_last_name': this.shippingInfo.shippingFirstName,
          'x_ship_to_company': this.shippingInfo.shippingFirstName,
          'x_ship_to_address': this.shippingInfo.shippingAddress,
          'x_ship_to_country': this.shippingInfo.shippingCountry,
          'x_ship_to_state': this.shippingInfo.shippingState,
          'x_ship_to_city': this.shippingInfo.shippingCity,
          'x_ship_to_zip': this.shippingInfo.shippingZip,
          'x_ship_to_email': this.shippingInfo.shippingEmail,
          'x_cancel_url': this.cancelUrl,
          'success_url': this.successUrl,
          'secret_key': this.secretKey,
          'app_key': this.appKey,
          'products': this.lineItem.products,
          'product_subscription': this.lineItem.productsSubscription,
          'sandbox': this.testMode,
          'plugin': 'js library'
        };
        this.validateArgs(args);
        var data = Buffer.from(JSON.stringify(args)).toString('base64');
        var redirect = 'https://quxpay.com/login-or-register?t=' + data;
        return redirect;
      } catch (error) {
        if (error instanceof _ValidationError.ValidationError) {
          console.error("Error: ".concat(error.message, " (Code: ").concat(error.code, ")"));
          return {
            status: "error",
            message: error.message,
            code: error.code
          };
        } else {
          console.error("An unexpected error occurred:", error);
          return {
            status: "error",
            message: "An unexpected error occurred.",
            code: "ERR_UNKNOWN"
          };
        }
      }
    }

    /**
     * Validates the total amount by ensuring it matches the sum of all line items.
     * @throws {ValidationError} If the total amount does not match.
     */
  }, {
    key: "checkTotalAmount",
    value: function checkTotalAmount() {
      var totalAmountInItems = this.orderInfo.freight + this.orderInfo.tax;
      if (this.lineItem.products.length) {
        this.lineItem.products.forEach(function (item) {
          totalAmountInItems += item.product_price * item.quantity;
        });
      }
      if (this.lineItem.productsSubscription.length) {
        this.lineItem.productsSubscription.forEach(function (item) {
          totalAmountInItems += item.product_price * item.quantity;
        });
      }
      if (totalAmountInItems != this.orderInfo.amount) {
        throw new _ValidationError.ValidationError('Invalid total amount, total amount does not match the sum of the checkout line items!', "ERR_INVALID_TOTAL_AMOUNT");
      }
    }

    /**
     * Validates required payment arguments before processing.
     * @param {object} args - The payment arguments to validate.
     * @throws {ValidationError} If any required field is missing or invalid.
     */
  }, {
    key: "validateArgs",
    value: function validateArgs(args) {
      if (!args.x_amount) {
        throw new _ValidationError.ValidationError("Amount is required.", "ERR_REQUIRED_VALUE");
      }
      if (typeof args.x_amount !== "number") {
        throw new _ValidationError.ValidationError("Invalid amount: Expected a number", "ERR_INVALID_VALUE");
      }
      if (args.x_amount <= 0) {
        throw new _ValidationError.ValidationError("Payment amount must be greater than zero", "ERR_NEGATIVE_VALUE");
      }
      if (!args.x_invoice_num) {
        throw new _ValidationError.ValidationError("Invoice number is required.", "ERR_REQUIRED_VALUE");
      }
      if (typeof args.x_freight !== "number") {
        throw new _ValidationError.ValidationError("Invalid freight: Expected a number", "ERR_INVALID_VALUE");
      }
      if (args.x_freight <= 0) {
        throw new _ValidationError.ValidationError("Freight must be greater than zero", "ERR_NEGATIVE_VALUE");
      }
      if (!args.x_fp_timestamp) {
        throw new _ValidationError.ValidationError("Timestamp is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.x_first_name) {
        throw new _ValidationError.ValidationError("Biller's first name is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.x_last_name) {
        throw new _ValidationError.ValidationError("Biller's last name is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.x_company) {
        throw new _ValidationError.ValidationError("Biller's company is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.x_address) {
        throw new _ValidationError.ValidationError("Biller's address is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.x_country) {
        throw new _ValidationError.ValidationError("Biller's country is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.x_state) {
        throw new _ValidationError.ValidationError("Biller's state is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.x_city) {
        throw new _ValidationError.ValidationError("Biller's city is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.x_zip) {
        throw new _ValidationError.ValidationError("Biller's zip is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.x_phone) {
        throw new _ValidationError.ValidationError("Biller's phone number is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.x_email) {
        throw new _ValidationError.ValidationError("Biller's email is required.", "ERR_REQUIRED_VALUE");
      } else {
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(args.x_email)) {
          throw new _ValidationError.ValidationError("Invalid email format.", "ERR_INVALID_EMAIL");
        }
      }
      if (!args.x_cancel_url) {
        throw new _ValidationError.ValidationError("Cancel URL is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.success_url) {
        throw new _ValidationError.ValidationError("Success URL is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.secret_key) {
        throw new _ValidationError.ValidationError("Secret Key is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.app_key) {
        throw new _ValidationError.ValidationError("App Key is required.", "ERR_REQUIRED_VALUE");
      }
      if (!args.sandbox) {
        throw new _ValidationError.ValidationError("Sandbox is required.", "ERR_REQUIRED_VALUE");
      }
      if (args.products.length < 1 && args.product_subscription.length < 1) {
        throw new _ValidationError.ValidationError("Line item is required", "ERR_REQUIRED_VALUE");
      }
      if (args.products.length > 0) {
        if (!args.x_ship_to_first_name) {
          throw new _ValidationError.ValidationError("Shipping's first name is required.", "ERR_REQUIRED_VALUE");
        }
        if (!args.x_ship_to_last_name) {
          throw new _ValidationError.ValidationError("Shipping's last name is required.", "ERR_REQUIRED_VALUE");
        }
        if (!args.x_ship_to_address) {
          throw new _ValidationError.ValidationError("Shipping's address is required.", "ERR_REQUIRED_VALUE");
        }
        if (!args.x_ship_to_country) {
          throw new _ValidationError.ValidationError("Shipping's country is required.", "ERR_REQUIRED_VALUE");
        }
        if (!args.x_ship_to_state) {
          throw new _ValidationError.ValidationError("Shipping's state is required.", "ERR_REQUIRED_VALUE");
        }
        if (!args.x_ship_to_city) {
          throw new _ValidationError.ValidationError("Shipping's city is required.", "ERR_REQUIRED_VALUE");
        }
        if (!args.x_ship_to_zip) {
          throw new _ValidationError.ValidationError("Shipping's zip is required.", "ERR_REQUIRED_VALUE");
        }
        if (!args.x_ship_to_email) {
          throw new _ValidationError.ValidationError("Shipping's email is required.", "ERR_REQUIRED_VALUE");
        } else {
          var _emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          if (!_emailRegex.test(args.x_ship_to_email)) {
            throw new _ValidationError.ValidationError("Invalid email format.", "ERR_INVALID_EMAIL");
          }
        }
      }
    }
  }]);
}();
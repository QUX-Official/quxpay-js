"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderInformation = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var OrderInformation = exports.OrderInformation = /*#__PURE__*/function () {
  function OrderInformation() {
    _classCallCheck(this, OrderInformation);
    /** @type {number} The amount of the order. */
    _defineProperty(this, "amount", void 0);
    /** @type {string} The invoice number associated with the order. */
    _defineProperty(this, "invoiceNumber", void 0);
    /** @type {number} The shipping fee for the order (freight). */
    _defineProperty(this, "freight", void 0);
    /** @type {number} The tax applied to the order. */
    _defineProperty(this, "tax", void 0);
  }
  return _createClass(OrderInformation, [{
    key: "setAmount",
    value:
    /**
     * Sets the total amount of the order.
     * @param {number} amount - The amount to be set.
     */
    function setAmount(amount) {
      this.amount = amount;
    }

    /**
     * Sets the invoice number for the order.
     * @param {string} invoiceNumber - The invoice number to be set.
     */
  }, {
    key: "setInvoiceNumber",
    value: function setInvoiceNumber(invoiceNumber) {
      this.invoiceNumber = invoiceNumber;
    }

    /**
     * Sets the freight (shipping fee) for the order.
     * @param {number} [freight=0] - The freight charge (default is 0).
     */
  }, {
    key: "setFreight",
    value: function setFreight() {
      var freight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.freight = freight;
    }

    /**
     * Sets the tax amount for the order.
     * @param {number} [tax=0] - The tax amount (default is 0).
     */
  }, {
    key: "setTax",
    value: function setTax() {
      var tax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.tax = tax;
    }

    /**
     * Retrieves the total amount of the order.
     * @returns {number} The total amount.
     */
  }, {
    key: "getAmount",
    value: function getAmount() {
      return this.amount;
    }

    /**
     * Retrieves the invoice number of the order.
     * @returns {string} The invoice number.
     */
  }, {
    key: "getInvoiceNumber",
    value: function getInvoiceNumber() {
      return this.invoiceNumber;
    }

    /**
     * Retrieves the freight (shipping fee) for the order.
     * @returns {number} The freight amount.
     */
  }, {
    key: "getFreight",
    value: function getFreight() {
      return this.freight;
    }

    /**
     * Retrieves the tax amount for the order.
     * @returns {number} The tax amount.
     */
  }, {
    key: "getTax",
    value: function getTax() {
      return this.tax;
    }
  }]);
}();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
export var LineItem = /*#__PURE__*/function () {
  function LineItem() {
    _classCallCheck(this, LineItem);
    /** @type {Array<Object>} Stores standard products */
    _defineProperty(this, "products", []);
    /** @type {Array<Object>} Stores subscription-based products */
    _defineProperty(this, "productsSubscription", []);
    /** @type {Array<Object>} Stores all line items */
    _defineProperty(this, "lineItems", []);
  }
  return _createClass(LineItem, [{
    key: "setLineItems",
    value:
    /**
     * Adds a line item to the order.
     * @param {number} id - The unique identifier of the product.
     * @param {number} quantity - The quantity of the product.
     * @param {string} productName - The name of the product.
     * @param {number} price - The price of the product.
     * @param {boolean} [subscription=false] - Indicates if the product is a subscription-based item.
     */
    function setLineItems(id, quantity, productName, price) {
      var subscription = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      // set line items

      var items = {
        'id': id,
        'quantity': quantity,
        'product_price': price,
        'product_name': productName,
        'subscription': subscription
      };
      this.lineItems.push(items);
      if (subscription) {
        this.setProductsWithSubscription(items);
      } else {
        this.setProducts(items);
      }
    }

    /**
     * Adds a product to the non-subscription products list.
     * @param {Object} items - The product details.
     */
  }, {
    key: "setProducts",
    value: function setProducts(items) {
      // set products 
      this.products.push(items);
    }

    /**
     * Adds a product to the subscription-based products list.
     * @param {Object} items - The product details.
     */
  }, {
    key: "setProductsWithSubscription",
    value: function setProductsWithSubscription(items) {
      // set products checkout
      this.productsSubscription.push(items);
    }

    /**
     * Retrieves all line items.
     * @returns {Array<Object>} The list of all line items.
     */
  }, {
    key: "getLineItems",
    value: function getLineItems() {
      return this.lineItems;
    }

    /**
     * Retrieves all non-subscription products.
     * @returns {Array<Object>} The list of non-subscription products.
     */
  }, {
    key: "getProducts",
    value: function getProducts() {
      return this.products;
    }

    /**
     * Retrieves all subscription-based products.
     * @returns {Array<Object>} The list of subscription-based products.
     */
  }, {
    key: "getProductsSubscription",
    value: function getProductsSubscription() {
      return this.productsSubscription;
    }
  }]);
}();
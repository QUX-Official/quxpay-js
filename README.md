# QUX Pay® Node.js SDK  

This is the official repository for utilizing the **QUX Pay® API** with Node.js.  

## Compatibility  

**quxpay-js** supports multiple JavaScript module systems, and the correct format is automatically selected based on the environment:  

- **CommonJS (CJS)** – for projects using `require()`  
- **ECMAScript Modules (ESM)** – for projects using `import`  
- **TypeScript (TS)** – with included type definitions  

No additional configuration is required—just install and import it into your project as needed.  



### Node.js
- **Recommended:** Node.js **16.x** or later  
- **Minimum Required:** Node.js **14.x**  

### TypeScript
- **Recommended:** TypeScript **4.7+** for best ES module support 

### Installation

- npm install quxpay-js

# How to Obtain Your API Key and Secret

This guide will walk you through the steps to obtain your API key and secret for integrating our service with your website.

## Step 1: Sign Up or Log In

1. Visit our [website](https://quxpay.com/) at https://quxpay.com
2. If you don’t have an account, click on the “Sign Up” button and fill out the registration form. If you already have an account, click on “Log In” and enter your credentials. You must have a Corporate account in order to use the QUXPay® API.

## Step 2: Navigate to the Biller API Section

1. Once logged in, go to **Biller API** icon.
2. In the dashboard, find and click on the “API” tab located in the sidebar menu.

## Step 3: Generate Your API Key and Secret

1. In the **Biller API** section, you need to accept our **Terms and Condition**.
2. after accepting our **Terms and Condition** you are able to generate your own key.
3. Click the “Generate New API Key & Passphrase” button.

## Step 4: Copy Your API Key and Secret

1. After generating your API key, system will display your new API key and secret.
2. Copy these credentials and store them in a secure place.

## Step 5: Configure Your Website

1. Paste the API key and secret into the corresponding fields.

## Step 6: Test the Integration

1. After saving the configuration, test the integration by making a simple request to ensure everything is set up correctly.
2. Refer to our documentation for details on making a requests.

## Support

If you encounter any issues or have questions, please reach out to our support team at https://quxpay.com

### Usage

Import **quxpay-js** in your service

```js
const QUXPay = require("quxpay-js");
const BillerInformation = QUXPay.BillerInformation;
const LineItem = QUXPay.LineItem;
const OrderInformation = QUXPay.OrderInformation;
const ShippingInformation = QUXPay.ShippingInformation;
const PaymentSDK = QUXPay.PaymentSDK;

const biller = new BillerInformation();
const lineItem = new LineItem();
const order = new OrderInformation();
const shipping = new ShippingInformation();
const paymentSDK = new PaymentSDK(biller, lineItem, order, shipping);

// Set Biller Information
biller.setBillerFirstName("John");
biller.setBillerLastName("Doe");
biller.setBillerCompany("Acme Corp");
biller.setBillerAddress("123 Main St");
biller.setBillerCountry("US");
biller.setBillerState("CA");
biller.setBillerCity("Los Angeles");
biller.setBillerZip("90001");
biller.setBillerPhone("+1-555-555-5555");
biller.setBillerEmail("john.doe@example.com");

// Set Shipping Information
shipping.setShippingFirstName("John");
shipping.setShippingLastName("Doe");
shipping.setShippingCompany("Acme Corp"); // optional
shipping.setShippingAddress("123 Main St");
shipping.setShippingCountry("US"); // default US
shipping.setShippingState("CA");
shipping.setShippingCity("Los Angeles");
shipping.setShippingZip("90001");
shipping.setShippingPhone("+1-555-555-5555");
shipping.setShippingEmail("john.doe@example.com");

// Set Order Information
order.setAmount(33.98);
order.setInvoiceNumber("OrderID");
order.setFreight(2); // default 0
order.setTax(1); // default 0

// Set Line Items
/**
 * Sets the line items for an order.
 * @param {string} id - The unique identifier for the item.
 * @param {number} quantity - The quantity of the item.
 * @param {string} product_name - The name of the product.
 * @param {number} amount - The price or amount for the item.
 * @param {boolean} [subscription=false] - Whether the item is a subscription.
 */
lineItem.setLineItems(1, 1, "productName", 50, false); // subscription default false
lineItem.setLineItems(1, 1, "Product Subscription Name 1", 50, true);

// Set Success and Cancel URL
paymentSDK.setCancelUrl("https://website.com/checkout-cancel");
paymentSDK.setSuccessUrl("https://website.com/checkout-success");
paymentSDK.setTestMode(true); // default false
```


## Redirection to QUX® Pay Payment Gateway

After setting everything up, you can call the **generateRedirectURL** function to get the redirection URL to the QUX® Pay payment gateway:

```javascript
let url = paymentSDK.generateRedirectURL();
```
Once you have the URL, you can redirect the user to the payment gateway using one of the following methods:

#### Redirect to a New Tab:
```javascript
window.open(url, '_blank');
```

#### Redirect to a New Window:
```javascript
window.open(url, '_blank', 'width=800,height=600');
```
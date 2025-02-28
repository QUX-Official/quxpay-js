// import {setBillerFirstName, getBillerFirstName} from '../Traits/BillerInformation';
const {setBillerFirstName, getBillerFirstName} = require('../Traits/BillerInformation');

test('set and get biller firstname', () => {
    setBillerFirstName('John');
    expect(getBillerFirstName()).toBe('John');
});
  
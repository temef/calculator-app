import { describe, expect, it } from 'vitest'
import calculator from '../src/calculator'

// small test file to test different delivery prices

describe('testing calculator', () => {

  // initalize starting values
  const cartValue = 10
  const distance = 1000
  const oneItem = 1
  const monday = new Date('2023-01-30T16:19')
  const friday = new Date('2023-01-27T20:19')

  it('test with starting values', () => {
    expect(calculator(cartValue, distance, oneItem, monday)).toBe(2);
  });

  it('price should be (0.50€ x items) bigger when items is 5', () => {
    expect(calculator(cartValue, distance, 5, monday)).toBe(4.5);
  });

  it('test value to be x1.2 higher on Friday (4.5€ x 1.2)', () => {
    expect(calculator(cartValue, distance, 5, friday)).toBe(5.4);
  });

  it('test when cartValue is less than 10 € the difference is added', () => {
    expect(calculator(cartValue-3, distance, 5, monday)).toBe(7.5);
  });
  
  it('test that delivery fee is 1€ more when distance is between 1001m - 1500m', () => {
    expect(calculator(cartValue-3, distance + 1, 5, monday)).toBe(8.5);
  });

  it('and 2€ more when distance is between 1501m - 1999m', () => {
    expect(calculator(cartValue-3, distance + 501, 5, monday)).toBe(9.5);
  });
  
  it('if items 13, 9 * 0,50€ and extra 1.20€ (5.70 €) is added', () => {
    expect(calculator(cartValue-3, distance + 501, 12, monday)).toBe(13);
  });

  it('if cart value is 100 € or more the delivery fee is Free (-1)', () => {
    expect(calculator(cartValue + 90, distance, 12, friday)).toBe(-1);
  })

  it('delivery fee can never be more than 15 € if cart value is under 100 €', () => {
    expect(calculator(cartValue, distance + 5000, 12, friday)).toBe(15);
  })

});
import { isEmpty } from '../index';

describe('Test utils "isEmpty"', () => {
  it('should return true if array is empty', () => {
    const arr = [];
    expect(isEmpty(arr)).toBe(true);
  });

  it('should return false if array is not empty', () => {
    const arr = [1, 2, 3];
    expect(isEmpty(arr)).toBe(false);
  });
});

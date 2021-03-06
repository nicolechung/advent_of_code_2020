import { howManyValid, isValid, Input, answer } from '../src/02-02';

describe('Day 2', () => {
  it('isValid is true with the correct input', () => {
    expect(isValid([1, 3, 'a', 'abcde'])).toEqual(true);
  });
  it('isValid is true with the correct input', () => {
    expect(isValid([1, 3, 'a', 'bbade'])).toEqual(true);
  });
  it('isValid is false with the (in)correct input', () => {
    expect(isValid([1, 3, 'b', 'cdefg'])).toEqual(false);
  });
  it('isValid is false with the correct input', () => {
    expect(isValid([2, 9, 'c', 'ccccccccc'])).toEqual(false);
  });
  it('howManyValid returns the correct number of valid', () => {
    const inputs: Input[] = [
      [1, 3, 'a', 'abcde'],
      [1, 3, 'b', 'cdefg'],
      [2, 9, 'c', 'ccccccccc'],
    ];
    expect(howManyValid(inputs)).toEqual(1);
  });
  it('returns an answer for 2-2', () => {
    expect(answer).toMatchInlineSnapshot(`509`);
  });
});

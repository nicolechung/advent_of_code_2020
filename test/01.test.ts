import {
  pairs,
  threes,
  multiply,
  numbers,
  answer,
  followUp,
  SUM_TO,
} from '../src/01';

describe('Day one tests', () => {
  it('pairs finds two numbers that add up to 2020', () => {
    expect(pairs([1721, 979, 366, 299, 675, 1456], SUM_TO)).toEqual([
      1721,
      299,
    ]);
  });
  it('threes finds three numbers that sum to 2020', () => {
    expect(threes([1721, 979, 366, 299, 675, 1456], SUM_TO)).toEqual([
      366,
      675,
      979,
    ]);
  });
  it('threes returns empty array for numbers that do not sum to 2020', () => {
    expect(threes([1, 2, 3, 4, 5], SUM_TO)).toEqual([0, 0, 0]);
  });
  it('multiply two numbers', () => {
    expect(multiply([1721, 299])).toEqual(514579);
  });
  it('parses file', () => {
    expect(Array.isArray(numbers)).toBe(true);
  });
  it('has answer', () => {
    expect(answer).toMatchInlineSnapshot(`1006875`);
  });
  it('has followup answer', () => {
    expect(followUp).toMatchInlineSnapshot(`165026160`);
  });
});

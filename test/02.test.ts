import { howManyValid } from '../src/02'

describe('Day 2', () => {
    const input = [
        [[1,3], 'a', 'abcde'],
        [[1,3], 'b', 'cdefg'],
        [[2,9], 'c', 'ccccccccc']
    ]
    expect(howManyValid(input)).toEqual(2)
})
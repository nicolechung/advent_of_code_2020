/**
 * --- Day 1: Report Repair ---
 * Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456

In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
 */


export const SUM_TO = 2020 

export const pairs:(nums: number[], sum: number)=>number[] = (nums, sum) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === sum) {
                return [nums[i], nums[j]]
            }
        }
    }
    return []
}

export const threes:(nums: number[], sum: number)=>number[] = (nums, sum) => {
    const sorted = nums.sort((a,b) => a-b)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] == sorted[i-1]) {
            continue
        }
        for (let j = i+1; j < sorted.length; j++) {
            if (sorted[j] === sorted[j-1]) {
                continue
            }
            for (let k = j + 1; k < sorted.length; k++) {
                if (sorted[k] === sorted[k-1]) {
                    continue
                }
                if (sorted[i] + sorted[j] + sorted[k] === sum) {
                    return [sorted[i], sorted[j], sorted[k]]
                }

            }
            
        }
    }
    return [0,0,0]
}

export const multiply= ([...numbers]) => {
    return numbers.reduce((a,b) => a*b)
}

import fs from 'fs'

const input = fs.readFileSync(`${__dirname}/01.txt`, 'utf8');

export const numbers:number[] = input.split('\n').map(str => parseInt(str, 10))

export const answer = multiply([...pairs(numbers, SUM_TO)])
export const followUp = multiply([...threes(numbers, SUM_TO)])

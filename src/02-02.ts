/**
 * 
 *--- Day 2: Password Philosophy ---
 *--- Part Two ---

While it appears you validated the passwords correctly, they don't seem to be what the Official Toboggan Corporate Authentication System is expecting.

The shopkeeper suddenly realizes that he just accidentally explained the password policy rules from his old job at the sled rental place down the street! The Official Toboggan Corporate Policy actually works a little differently.

Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

Given the same example list from above:

    1-3 a: abcde is valid: position 1 contains a and position 3 does not.
    1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
    2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.

How many passwords are valid according to the new interpretation of the policies?

 */

import fs from 'fs';

export type Input = [number, number, string, string];

export const isValid = (input: Input) => {
  const [first, second, letter, password] = input;
  console.log({ first, second, letter, password });
  const pattern = new RegExp(letter);
  // all the inputs seem to have a minimum range of 1

  // if none at all match return false
  if (!pattern.test(password)) return false;

  // wonder if this would be faster with sorting the password first?
  const passwordList = ` ${password}`.split('');
  console.log('tests');
  console.log({ 1: passwordList[first], first, passwordList });
  console.log({ 2: passwordList[second], second, passwordList });
  if (passwordList[first] === letter && passwordList[second] === letter) {
    return false;
  }
  if (passwordList[first] !== letter && passwordList[second] !== letter) {
    return false;
  }
  if (passwordList[first] === letter || passwordList[second] === letter) {
    return true;
  }
  return false;
};

export const howManyValid = (inputs: Array<Input>) => {
  // brute force
  // loop through each item
  let valid = 0;

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (isValid(input)) {
      valid++;
    }
  }
  return valid;
};

const file = fs.readFileSync(`${__dirname}/02.txt`, 'utf8');

const inputs = file.split('\n').map((line: string) => {
  const [min, max, letter, , password] = line.split(/-|:|\s/);
  const input =
    ([parseInt(min, 10), parseInt(max, 10), letter, password] as Input) || null;
  return input;
});

export const answer = howManyValid(inputs);

/**
 * 
 *--- Day 2: Password Philosophy ---

Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.

The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

For example, suppose you have the following list:

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc

Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies?

 */
import fs from 'fs';

export type Input = [number, number, string, string];

export const isValid = (input: Input) => {
  const [min, max, letter, password] = input;
  const pattern = new RegExp(letter);
  // all the inputs seem to have a minimum range of 1
  // do a check to save on running the loop after this
  if (!pattern.test(password)) return false;
  if (!password) {
    return;
  }

  // wonder if this would be faster with sorting the password first?
  const passwordList = password.split('');
  let count = 0;
  for (let i = 0; i < passwordList.length; i++) {
    const current = passwordList[i];
    if (pattern.test(current)) {
      count++;
    }
  }
  if (count >= min && count <= max) {
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
  const input = [
    parseInt(min, 10),
    parseInt(max, 10),
    letter,
    password,
  ] as Input;
  return input;
});

export const answer = howManyValid(inputs);

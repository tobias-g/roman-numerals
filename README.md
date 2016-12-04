# Roman Numerals

Script that takes a roman numeral and outputs as arabic numerals.

## How To Run

This is a node script that expects a single argument that is the roman numeral. It outputs the arabic equivilent as shown in the example below.

```
$ node app.js XIII
13
```

## Running The Tests

The script itself has no dependencies however before running the tests there are some packaged needed for this (chai, mocha, sinon etc).

Run `npm install` and once the packages are installed run `npm run test`. You can also run `npm run coverage` to run the tests and get the code coverage.

## Whats Not Included

This is a very basic package. Theres no error handling at this point. `node app.js foobar` will simply return 0. A future improvement is to check for bad input and inform the user.

## How It Works

The script simply takes a string and loops though it adding the roman letters value to a sum to get a final value of the roman numeral. If there's a roman numeral with a higher value than its preceding numeral we ignore the preceding letter and use the subtraction notation. For example IV is 4.

## Alternatives

While this is a test to see how I would solve the problem a more real world response of what I would do when faced with a problem would be to see what other packages already exist to solve it. NPM has hundreds of packages to deal with roman numerals so I always look to see is there already a defacto way of solving this problem so I don't need to re-invent the wheel.


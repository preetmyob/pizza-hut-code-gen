# Pizza Code Generator

A JavaScript utility that generates zero-padded 5-digit codes that are multiples of 3, specifically designed to find codes greater than a specified threshold.

## Features

- Generates random 5-digit codes (00000-99999)
- All generated codes are multiples of 3
- Finds codes above a configurable threshold (default: 90000)
- Progress feedback with attempt counter
- ~10% success rate per attempt for threshold 90000

## Usage

```bash
node pizzgen.js
```

## Example Output

```
Looking for code > 90000... (Success rate: ~10% per attempt)
✔ Found code > 90000: 91488 (after 11 attempts)
```

## How it works

1. Generates random numbers from 0 to 33333
2. Multiplies by 3 to ensure the result is a multiple of 3
3. Zero-pads to 5 digits
4. Continues until finding a code above the threshold

## Code Range

- Minimum possible code: `00000`
- Maximum possible code: `99999`
- All codes are multiples of 3
- For threshold 90000: ~3,334 valid codes out of 33,334 total (10% success rate)

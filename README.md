# Pizza Code Generator

A JavaScript utility that generates zero-padded 5-digit codes that are multiples of 3, specifically designed to find codes greater than a specified threshold.

> **Inspiration:** This project was inspired by the [Pizza Generator](https://null000.github.io/pizza-generator/) by null000.

## Features

- Generates random 5-digit codes (00000-99999)
- All generated codes are multiples of 3
- Finds codes above a configurable threshold (default: 90000)
- Command-line argument support for custom thresholds
- Dynamic success rate calculation based on threshold
- Progress feedback with attempt counter
- Input validation with helpful error messages

## Usage

```bash
# Use default threshold (90000)
node pizzgen.js

# Use custom threshold
node pizzgen.js 95000

# Make executable and run directly
chmod +x pizzgen.js
./pizzgen.js 85000
```

## Example Output

```bash
$ node pizzgen.js 95000
Looking for code > 95000... (Success rate: ~5.0% per attempt)
✔ Found code > 95000: 98304 (after 15 attempts)

$ node pizzgen.js 50000  
Looking for code > 50000... (Success rate: ~50.0% per attempt)
✔ Found code > 50000: 52239 (after 3 attempts)
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

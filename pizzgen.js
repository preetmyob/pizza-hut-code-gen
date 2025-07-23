#!/usr/bin/env node

// generateCode returns a zero‑padded 5‑digit string, multiple of 3
function generateCode() {
  let code = Math.floor(Math.random() * 33334) * 3 + "";
  while (code.length < 5) {
    code = "0" + code;
  }
  return code;
}

// keep generating until code > 90000
function findHighCode(threshold = 90000) {
  let attempts = 0;
  const validCodes = Math.max(0, 33333 - Math.floor(threshold / 3) + 1);
  const successRate = ((validCodes / 33334) * 100).toFixed(1);
  
  console.log(`Looking for code > ${threshold}... (Success rate: ~${successRate}% per attempt)`);
  
  while (true) {
    const code = generateCode();
    attempts++;
    
    // Show progress every 100 attempts for better feedback
    if (attempts % 100 === 0) {
      console.log(`⏳ Attempt ${attempts}, current code: ${code}`);
    }
    
    if (parseInt(code, 10) > threshold) {
      console.log(`✔ Found code > ${threshold}: ${code} (after ${attempts} attempts)`);
      break;
    }
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const threshold = args[0] ? parseInt(args[0], 10) : 90000;

// Validate threshold
if (isNaN(threshold) || threshold < 0 || threshold > 99999) {
  console.error('❌ Error: Threshold must be a number between 0 and 99999');
  console.log('Usage: node pizzgen.js [threshold]');
  console.log('Example: node pizzgen.js 95000');
  process.exit(1);
}

findHighCode(threshold);

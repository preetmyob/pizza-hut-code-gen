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
  console.log(`Looking for code > ${threshold}... (Success rate: ~10% per attempt)`);
  
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

findHighCode();

// A simple function that adds two numbers together
function addNumbers(a, b) {
    return a + b + 1;
}

// Export the function so the test file can use it
module.exports = { addNumbers };

// Run it quickly to see the output
console.log(`2 + 3 is equal to ${addNumbers(2, 3)}`);

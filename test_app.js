const { addNumbers } = require('./app');
const assert = require('assert');

try {
    // Test positive numbers
    assert.strictEqual(addNumbers(2, 3), 5);
    
    // Test negative numbers
    assert.strictEqual(addNumbers(-1, 1), 0);
    
    // Test zero
    assert.strictEqual(addNumbers(0, 0), 0);
    
    console.log(" All tests passed successfully!");
} catch (error) {
    console.error("❌ Test failed!");
    console.error(error.message);
    process.exit(1); // Exiting with 1 tells the CI/CD pipeline that it failed
}

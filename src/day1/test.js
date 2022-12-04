const fs = require('fs');
const run = require('./index.js');

beforeEach(() => {
    // should stub out the fs.readFileSync function with the contents of the test file
    const fileContents = '1\r\n2\r\n3\r\n\r\n4\r\n5\r\n6\r\n\r\n7\r\n8\r\n9\r\n';
    fs.readFileSync = jest.fn(() => fileContents);
});

test('should return the sum of the elf with the most food', async () => {
    expect(run(1)).toBe(24);
})

test('should return the sum of the top three elves with the most food', async () => {
    expect(run(3)).toBe(45);
});

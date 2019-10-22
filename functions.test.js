//Create a test file by using the same file name you want to test and add ".test" to it; Jest will pick it up.

const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    //Use "expect()" and enter file name and call the funtion, in this case "functions.add", pass in the parameters, followed by the matcher, ".toBe()", and pass in the expected output.
    expect(functions.add(2, 2)).toBe(4);
});
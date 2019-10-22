//Create a test file by using the same file name you want to test and add ".test" to it; Jest will pick it up.

const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    //Use "expect()" and enter file name and call the funtion, in this case "functions.add", pass in the parameters, followed by the matcher, ".toBe()", and pass in the expected output.
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    //Can also use ".not.toBe".
    expect(functions.add(2, 2)).not.toBe(5);
});

//CHECK FOR TRUTHY OR FALSY VALUES - LIST OF MATCHERS
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Determines if output is null', () => {
    expect(functions.isNull()).toBeNull();
});
//Basic functions to practice unit testing with Jest.

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user =
        {
            firstName: 'Luke',
            lastName: 'Skywalker'
        }
        return user;
    }
}

module.exports = functions;
const sum = require('./sum')

test('addition of two numbers:', () => {
    expect(sum(2,2)).toBe(4);
})
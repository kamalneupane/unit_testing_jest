const {getCurrencies} = require('./arrar')

test('arary test', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
});
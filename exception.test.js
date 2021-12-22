const { addProduct } = require('./exception')

test('Exception testing:', () => {

    expect(() => { addProduct(null) }).toThrow();

    const result = addProduct('Apple');

    expect(result).toMatchObject({productName:'Apple'});
    expect(result.id).toBeGreaterThan(0);

})
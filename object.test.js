const {getUser} = require('./object')
test('object test', () => {
    const result = getUser(1);
    expect(result).toMatchObject({id: 1, fName: 'Kamal', lName:'Neupane'})
})
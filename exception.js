module.exports.addProduct = function(productName){

    if(!productName) throw new Error('Product name is required');

    return {id: new Date().getTime(), productName: productName};
    
}
const Products = require('../models/product.model.js');

// Return all products in the entire system
const findAllProducts = async () => {
    const products = await Products.find();
    return products;
}

// Return product with this ID
const findProductById = async () => {
    try {
        const product = await Products.findProductById(id);
        if (product == null) {
            throw {status: 204, msg: `No product found with the ID of ${id}.`}
        }
        return product;
    } catch (err) {
        throw err;
    }
}

// Add new product - POST
// Update product - PUT
// Delete product - DELETE

module.exports = { findAllProducts, findProductById };
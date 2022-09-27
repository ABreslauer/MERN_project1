const Product = require('../models/product.model.js');

// Return all products in the entire system
const findAllProducts = async () => await Product.find();

// Return product with this ID
const findProductById = async () => {
    try {
        const product = await Product.findProductById(id);
        if (product == null) {
            throw {status: 204, msg: `No product found with the ID of ${id}.`}
        }
        return product;
    } catch (err) {
        throw err;
    }
}

// Create new product
const createProduct = async productToSave => {
    try {
        const product = new Product(productToSave);
        await product.save();
        return product;
    } catch (err) {
        throw err;
    }
}

const updateProduct = async (id, productToUpdate) => {
    try {
        await Product.findByIdAndUpdate(id, productToUpdate);
    } catch (err) {
        throw {status:400, msg:err };
    }
}

const deleteProductById = async id => await Product.findByIdAndDelete(id);

module.exports = { findAllProducts, findProductById, createProduct, updateProduct, deleteProductById };
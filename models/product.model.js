const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * What properties should a product have?
 * 
 * id: provided by mongoDB
 * name: string
 * description: string
 * price: number
 * currentInventory: number
 * warehouse: string
 */

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    currentInventory: Number
})

const product = mongoose.model('Product', productSchema, 'Product');
module.exports = product;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * What properties should a warehouse have?
 * 
 * Name: string
 * Current Inventory: number
 * Max Capacity: number
 */

const warehouseSchema = new Schema({
    name: String,
    address: String,
    maxInventory: Number, 
    inventory: {
        type: [{
            type:mongoose.Types.ObjectId,
            ref: 'Product'
        }],
        validate: [products => products.length <= maxInventory, 'Cannot store more than 1000 products in a warehouse.']
    }
});

const warehouse = mongoose.model('Warehouse', warehouseSchema, 'Warehouse');

module.exports = warehouse;
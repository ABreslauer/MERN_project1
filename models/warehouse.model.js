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
    currentInventory: Number,
    maxInventory: Number
});

const warehouse = mongoose.model('Warehouse', warehouseSchema, 'Warehouse');

module.exports = warehouse;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const defaultMaxInventory = 1000;

const warehouseSchema = new Schema({
    name: String,
    address: String,
    maxInventory: Number, 
    inventory: {
        type: [{
            type:mongoose.Types.ObjectId,
            ref: 'Book'
        }]
    }
});

const Warehouse = mongoose.model('Warehouse', warehouseSchema);

module.exports = Warehouse;
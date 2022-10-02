const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const warehouseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    maxInventory: {
        type: Number, 
        required: true
    },
    inventory: {
        type: [{
            type: mongoose.Types.ObjectId,
            ref: 'Book',
        }]
    }
});

const Warehouse = mongoose.model('Warehouse', warehouseSchema);

module.exports = Warehouse;
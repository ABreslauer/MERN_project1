// Make all queries in this file
const Warehouse = require('../models/warehouse.model.js');

const findAllWarehouses = async () => {
    const warehouses = await Warehouse.find();
    return warehouses;
}

const findWarehouseById = async id => {
    try {
        const warehouse = await Warehouse.findById(id);
        if (warehouse == null) {
            throw {status: 204, msg: `No warehouse found with the ID of ${id}.`}
        }
        return warehouse;
    } catch (err) {
        throw err;
    }
}

// Add new warehouse - POST
// Update warehouse inventory - PUT
// Delete warehouse - DELETE

module.exports = { findAllWarehouses, findWarehouseById };
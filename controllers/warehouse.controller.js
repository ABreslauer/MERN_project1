const Warehouse = require('../models/warehouse.model.js');

const findAllWarehouses = async () => {
    const warehouses = await Warehouse.find().populate('inventory');
    return warehouses;
}

const findWarehouseById = async id => {
    try {
        const warehouse = await Warehouse.findById(id).populate('inventory');
        if (warehouse == null) {
            throw {status: 204, msg: `No warehouse found with the ID of ${id} was found.`}
        }
        return warehouse;
    } catch (err) {
        throw err;
    }
}

const createWarehouse = async warehouseToSave => {
    try {
        const warehouse = new Warehouse(warehouseToSave);
        await warehouse.save();
        return warehouse;
    } catch (err) {
        throw {status: 500, msg: err.message};
    }
}

const updateWarehouse = async (id, warehouseToUpdate) => {
    try {
        const warehouse = await Warehouse.findByIdAndUpdate(id, warehouseToUpdate);
        if (warehouse == null) {
            throw {status: 204, msg: `No warehouse with the ID of ${id} was found.`};
        }
    } catch (err) {
        throw {status: 400, msg: err};
    }
}

const addBookToWarehouse = async (warehouseid, bookid) => {
    try {
        const warehouse = await Warehouse.findById(warehouseid);
        if (warehouse == null) {
            throw {status: 204, msg: `No warehouse with the ID of ${id} was found.`}
        }
        warehouse.inventory.push(bookid);
        await warehouse.save();
    } catch (err) {
        throw {status: 400, msg: err};
    }
}

const removeBookFromWarehouse = async (warehouseid, bookid) => {
    try {
        const warehouse = await Warehouse.findById(warehouseid);
        if (warehouse == null) {
            throw {status: 204, msg: `No warehouse with the ID of ${id} was found.`}
        }
        warehouse.inventory.splice(warehouse.inventory.indexOf(bookid), 1);
        await warehouse.save();
    } catch (err) {
        throw {status: 400, msg: err};       
    }
}

const deleteWarehouse = async (id) => await Warehouse.findByIdAndDelete(id);

module.exports = { findAllWarehouses, findWarehouseById, createWarehouse, updateWarehouse, addBookToWarehouse, removeBookFromWarehouse, deleteWarehouse };
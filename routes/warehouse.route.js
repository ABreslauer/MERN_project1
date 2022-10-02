const {findWarehouseById, findAllWarehouses, createWarehouse, updateWarehouse, addBookToWarehouse, removeBookFromWarehouse, deleteWarehouse } = require('../controllers/warehouse.controller.js')
const mongoose = require('mongoose');
const { json } = require('express');
const { findOne } = require('../models/book.model.js');
const router = require('express').Router();

const validateObjectId = (req, res, next) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        res.status(204).send();
    } else {
        next();
    }
}

// Retrieve all warehouses
router.get('/', async (req,res) => {
    const warehouses = await findAllWarehouses();
    res.json(warehouses);
})

// Retrieve a specific warehouse
router.get('/:id', validateObjectId, async(req,res) => {
    try {
        const warehouse = await findWarehouseById(req.params.id);
        res.json(warehouse);
    } catch (err) {
        res.status(err?.status).json(err);
    }
})

// Create a new warehouse
router.post('/', async (req,res) => {
    try {
        const warehouse = await createWarehouse(req.body);
        res.status(201).json(warehouse);
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

// Modify warehouse details (not adding books)
router.put('/:id', validateObjectId, async (req, res) => {
    try {
        await updateWarehouse(req.params.id, req.body);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

// Add a book to a warehouse
router.put('/:id/addBook/:bookid', validateObjectId, async (req,res) => {
    try {
        await addBookToWarehouse(req.params.id, req.params.bookid);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

// Remove a book from a warehouse
router.put('/:id/removeBook/:bookid', validateObjectId, async (req, res) => {
    try {
        await removeBookFromWarehouse(req.params.id, req.params.bookid);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})


// Delete a warehouse
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        await deleteWarehouse(id);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

module.exports = router;
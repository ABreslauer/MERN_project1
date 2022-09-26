// warehouse URLS: view all warehouses

const { findAllWarehouses, findWarehouseById } = require('../controllers/warehouse.controller.js');
const mongoose = require('mongoose');

const router = require('express').Router();

// Get all warehouses
router.get('/', async (req, res) => {
    const warehouses = await findAllWarehouses();
    res.json(warehouses);
})

// Get warehouse by ID
router.get('/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            throw {status: 204, msg: 'No warehouses found.'}
        }
        const warehouses = await findWarehouseById(req.params.id);
        res.json(warehouses);
    } catch (err) {
        res.status(err?.status).json(err);
    }
})

module.exports = router;
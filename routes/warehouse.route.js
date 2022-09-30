const {findWarehouseById, findAllWarehouses, createWarehouse, updateWarehouse, deleteWarehouse } = require('../controllers/warehouse.controller.js')
const mongoose = require('mongoose');
const { json } = require('express');
const router = require('express').Router();

const validateObjectId = (req, res, next) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        res.status(204).send();
    } else {
        next();
    }
}

router.get('/', async (req,res) => {
    const warehouses = await findAllWarehouses();
    res.json(warehouses);
})

router.get('/:id', validateObjectId, async(req,res) => {
    try {
        const warehouse = await findWarehouseById(req.params.id);
        res.json(warehouse);
    } catch (err) {
        res.status(err?.status).json(err);
    }
})

router.post('/', async (req,res) => {
    try {
        const warehouse = await createWarehouse(req.body);
        res.status(201).json(warehouse);
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

router.put('/:id', validateObjectId, async (req, res) => {
    try {
        await updateWarehouse(req.params.id, req.body);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        await deleteWarehouse(id);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

module.exports = router;
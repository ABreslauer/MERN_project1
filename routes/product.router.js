const { findAllProducts, findProductById, createProduct, updateProduct, deleteProductById } = require('../controllers/product.controller.js');
const mongoose = require('mongoose');
const router = require('express').Router();

const validateObjectId = (req, res, next) => {
    // mongoose.isValidObjectId is a wrapper for mongoose.Types.ObjectId.isValid
    if (!mongoose.isValidObjectId(req.params.id)) {
        res.status(204).send();
    } else {
        next();
    }
}

// Get all products
router.get('/', async (req, res) => {
    const products = await findAllProducts();
    res.json(products);
})

// Get product by ID
router.get('/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            throw {status:204, msg: "No products found."}
        }
        const product = await findProductById(req.params.id);
        res.json(product);
    } catch (err) {
        res.status(err?.status).json(err);
    }
})

// Add product
router.post('/', async (req, res) => {
    try {
        const product = await createProduct(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
});

// Update product by ID
router.put('/:id', async (req, res) => {
    try {
        await updateProduct(req.params.id, req.body);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
});

// Delete a product
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        await deleteProductById(req.params.id);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

module.exports = router;
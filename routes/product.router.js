const { findAllProducts, findProductById } = require('../controllers/product.controller.js');
const mongoose = require('mongoose');

const router = require('express').Router();
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

module.exports = router;
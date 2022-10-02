const {findBookById, findAllBooks, createBook, updateBook, deleteBook } = require('../controllers/book.controller.js')
const mongoose = require('mongoose');

const router = require('express').Router();

const validateObjectId = (req, res, next) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        res.status(204).send();
    } else {
        next();
    }
}

router.get('/', async (req,res) => {
    const books = await findAllBooks();
    res.json(books);
})

router.get('/:id', validateObjectId, async (req,res) => {
    try {
        const book = await findBookById(req.params.id);
        res.json(book);
    } catch (err) {
        res.status(err?.status).json(err);
    }
})

router.post('/', async (req,res) => {
    try {
        const book = await createBook(req.body);
        res.status(201).json(book);
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

router.put('/:id', validateObjectId, async (req, res) => {
    try {
        await updateBook(req.params.id, req.body);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        await deleteBook(req.params.id);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

module.exports = router;
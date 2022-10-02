const Book = require('../models/book.model.js');
const Warehouse = require('../models/warehouse.model.js');

const findAllBooks = async () => {
    const books = await Book.find();
    return books;
}

const findBookById = async id => {
    try {
        const book = await Book.findById(id);
        if (book == null) {
            throw {status: 204, msg: `No book found with the ID of ${id}.`}
        }
        return book;
    } catch (err) {
        throw err;
    }
}

const createBook = async bookToSave => {
    try {
        const book = new Book(bookToSave);
        await book.save();
        console.log(`Book: ${book}`);    
        return book;
    } catch (err) {
        throw err;
    }
}

const updateBook = async (id, bookToUpdate) => {
    try  {
        const book = await Book.findByIdAndUpdate(id, bookToUpdate);
        if (book==null) {
            throw {status: 204, msg: `No book with the ID of ${id} was found.`};
        }
    } catch (err) {
        throw {status: 400, msg: err};
    }
}

const deleteBook = async (id) => await Book.findByIdAndDelete(id);

module.exports = { findAllBooks, findBookById, createBook, updateBook, deleteBook };
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    description: String,
    author: String,
    wordCount: Number,
    releaseDate: Date,
    price: Number,
    currentInventory: {
        type: Number,
        validate: [num => num >= 0, 'Cannot have negative books stored']
    },
    imageURL: String,
    warehouseId: {
        type: mongoose.Types.ObjectId,
        ref: 'Warehouse',
        required: true
    }
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

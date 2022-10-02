const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    author: String,
    wordCount: Number,
    releaseDate: Date,
    price: {
        type: Number,
        required: true
    },
    imageURL: String
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

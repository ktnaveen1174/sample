//models-book.js-Aafaq-Muzaffar-301190210-Nov-01-2022
let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number,
    genre: String
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let bookSchem = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String
    },
    date: {
        type: String,
        required: true,
        unique: true
    }
});
let Book = mongoose.model("Book", bookSchem);
module.exports = Book;
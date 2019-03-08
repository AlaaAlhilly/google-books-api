let Books = require('../models/Books');
module.exports = function(router) {
    router.get('/api/books', function(req, res) {
        Books.find({}, (err, books) => {
            if (err) throw err;
            res.json(books);
        })
    });
    router.post('/api/books', (req, res) => {
        let book = req.body;
        Books.insertMany(book, (err, result) => {
            if (err) throw err;
            res.json(result);
        })
    });
    router.delete('/api/delete/:id', (req, res) => {
        Books.findOneAndDelete({ _id: req.params.id }, (err, result) => {
            if (err) throw err;
            res.status(200).end();
        })
    });
}
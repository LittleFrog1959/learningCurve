var express = require ('express');
var app = express ();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');

Genre = require ('./models/genre');

// Connect to mongoose
mongoose.connect ('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get ('/',function (req, res) {
    res.send ('Please use /api/books or /api/genres');
});

app.get ('/api/genres',function (req, res) {
    Genre.getGenres (function (err, genres) {
        if (err) {
            throw err;
        }
        res.json (genres);
    });
});

app.get ('/api/books',function (req, res) {
    res.send ();
});


app.listen (3030);
console.log ("Listening");

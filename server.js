// ==================
// || REQUIREMENTS ||
// ==================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// ===============
// || VARIABLES ||
// ===============

var app = express();
var PORT = process.env.PORT || 3000;

// =========
// || APP ||
// =========

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

add.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

add.get('/reservations', function(req, res) {
    res.sendFile(path.join(__dirname, 'reservations.html'));
});

add.get('/table', function(req, res) {
    res.sendFile(path.join(__dirname, 'table.html'));
});


// ==============
// || LISTENER ||
// ==============

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});
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

var reserv = [];
var waitList = [];

// =========
// || APP ||
// =========

// ==============
// || REQUESTS ||
// ==============

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/reservations', function(req, res) {
    res.sendFile(path.join(__dirname, 'reservations.html'));
});

app.get('/table', function(req, res) {
    res.sendFile(path.join(__dirname, 'table.html'));
});

app.get('/api/waitList', function(req, res) {
    return res.json(waitList);
});

app.get('/api/reserv', function(req, res) {
    return res.json(reserv);
});

// ==========
// || POST ||
// ==========

app.post('/api/reserv', function(req, res) {
    var newReserv = req.body;
    newReserv.uniqueID = newReserv.name.replace(/\s+/g, '').toLowerCase();
    if (reserv.length < 5) {
        reserv.push(newReserv);
    }
    else {
        waitList.push(newReserv);
    }
    res.json(newReserv);
});

// ==============
// || LISTENER ||
// ==============

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});
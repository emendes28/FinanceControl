const express = require('express');
const app = express.Router();
const dispende = require('../controllers/dispende.js');

app.route('')
    .get(dispende.getAll)
    .post(dispende.save);
app.route('/:id')    
    .put(dispende.update)
    .delete(dispende.delete);

module.exports = app;
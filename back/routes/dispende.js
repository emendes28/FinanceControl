const express = require('express');
const app = express.Router();
const dispende = require('../controllers/dispende');

app.get('/', dispende.getAll);
/* SAVE  */
app.post('/', dispende.save);
app.put('/:id', dispende.update);
app.delete('/:id', dispende.delete);

module.exports = app;
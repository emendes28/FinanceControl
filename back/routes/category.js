const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Category = require('../models/Category.js');

/* GET all categories. */
router.get('/', (req, res, next) => {
  Category.find( (err, categories) => {
    if (err) return next(err);
    res.json(categories);
  });
});


module.exports = router;
const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');
const Dispende = require('../models/Dispende.js');


const tratativa = (err, post) => {
  if (err) return next(err);
  res.json(post);
};



/* GET all dispendes. */
exports.getAll = (req, res, next) => Dispende.find(tratativa(err, dispendes));

/* SAVE  */
exports.save = (req, res, next) => Dispende.create(req.body,tratativa(err, post));

/* UPDATE  */
exports.update = (req, res, next) => Dispende.findByIdAndUpdate(req.params.id, req.body, tratativa(err, post));

/* DELETE  */
exports.delete = (req, res, next) => Dispende.findByIdAndRemove(req.params.id, req.body, tratativa(err, post));

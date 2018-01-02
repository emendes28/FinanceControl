const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');
const Dispende = require('../models/Dispende.js');

/* GET all dispendes. */
exports.getAll = (req, res, next) => Dispende.find( (err, post) => {
  if (err) return next(err);
  res.json(post);
});

/* SAVE  */
exports.save = (req, res, next) => Dispende.create(req.body, (err, post) => {
  if (err) return next(err);
  res.json(post);
});

/* UPDATE  */
exports.update = (req, res, next) => Dispende.findByIdAndUpdate(req.params.id, req.body,  (err, post) => {
  if (err) return next(err);
  res.json(post);
});

/* DELETE  */
exports.delete = (req, res, next) => Dispende.findByIdAndRemove(req.params.id, req.body,  (err, post) => {
  if (err) return next(err);
  res.json(post);
});

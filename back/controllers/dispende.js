const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');
const Dispende = require('../models/Dispende.js');

const tratativa = (err, post) => {
  if (err) return next(err);
  res.json(post);
};

const method = (req, res, next, func) => {  
  func();
};

/* GET all dispendes. */
dispendeCtrl.getAll = method(req, res, next, Dispende.find(tratativa(err, dispendes)));

/* SAVE  */
dispendeCtrl.save = method((req, res, next, Dispende.create(req.body,tratativa(err, post));

/* UPDATE  */
dispendeCtrl.update = method((req, res, next, Dispende.findByIdAndUpdate(req.params.id, req.body, tratativa(err, post)));

/* DELETE  */
dispendeCtrl.delete = (req, res, next, Dispende.findByIdAndRemove(req.params.id, req.body, tratativa(err, post)));

module.exports = dispendeCtrl;
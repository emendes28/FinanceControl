const mongoose = require('mongoose');

const CategoryShema = new mongoose.Schema({
    _id: Number,
    desc: String
});

module.exports = mongoose.model('Category',CategoryShema);
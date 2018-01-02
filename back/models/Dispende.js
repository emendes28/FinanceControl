const mongoose = require('mongoose');

const DispendeShema = new mongoose.Schema({
    _id: Number,
    desc: String,
    data: Date,
    valor: Number
});

module.exports = mongoose.model('Dispende',DispendeShema);
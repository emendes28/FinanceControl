const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const dispende = require('./routes/dispende');
const category = require('./routes/category');
const app = express();

mongoose.Promise = require('bluebird');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, '../front/dist')));
app.use('/dispendes', express.static(path.join(__dirname, '../front/dist')));
app.use('/dispende', dispende);
app.use('/category', category);
const prod = 'mastter:123456@ds237707.mlab.com:37707';
const dev = 'localhost:27017';
mongoose.connect(`mongodb://${prod}/financecontrol`, {
    useMongoClient: true, promiseLibrary: require('bluebird')
}).then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
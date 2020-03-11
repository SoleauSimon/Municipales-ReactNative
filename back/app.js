const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const commentRoutes = require('./routes/commentRoutes');

app.use(cors({ origin: process.env.FRONT_URL || 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.Promise = require('bluebird');
mongoose.set('debug', true);
mongoose.connect("mongodb://127.0.0.1:27017/", { promiseLibrary: require('bluebird') })
    .then(_ => console.log('connection succesfull'))
    .catch(error => console.log(error));

app.use('/api', commentRoutes);

app.listen(9000, () => console.log('app listening port 9k'))

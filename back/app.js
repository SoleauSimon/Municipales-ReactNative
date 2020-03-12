const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');

const commentRoutes = require('./routes/commentRoutes');

mongoose.connect("mongodb://localhost/municipaldb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
mongoose.Pormise = global.Promise

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors());
app.use('/api', commentRoutes);

app.listen(9000, () => console.log('app listening port 9000'))

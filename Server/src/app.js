const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config()
const app = express()


//init middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(compression()); 
//init db



app.use("/",require("./router"))//handeleror

module.exports = app
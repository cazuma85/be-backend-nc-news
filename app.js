const express = require('express');
const app = express();
const apiRouter = require('./routers/api.router');
const { errorHandler, notFoundError } = require('./errors/errorHandler.js');
app.use(express.json());

app.use('/api', apiRouter);
//app.use(errorHandler);
//app.use('/*', notFoundError);
module.exports = app;

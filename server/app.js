const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//Routers
const usersRouter = require('./routers/userRouter.js');
const chatRouter = require('./routers/chatRouter.js');

//MiddleWares
const { errorHandlerMiddleware } = require('./middlewares/errorHandler');

/***** MIDDLEWARE *****/
app.use(cors('*'));
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

/***** ROUTERS *****/
app.use('/users', usersRouter); // Register, Login
app.use('/chat', chatRouter); // Send Message

app.use(errorHandlerMiddleware);

module.exports = app;

import createError from 'http-errors';
import express,{NextFunction, Request,Response} from "express"
const  mongoose = require('mongoose');
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from "cors"


import indexRouter from './routes/index';
import usersRouter from './routes/users';

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//initialize environment variable
require("dotenv").config()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cross origin(enable connection to back end)
app.use(cors())

//connect to Mongo DB.
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

mongoose.connection.on('connected', onMongoConnected)
mongoose.connection.on('disconnected', onMongoDisconnected)
mongoose.connection.on('error', onMongoError)

function onMongoConnected() {
  console.log("MongodDB Connected Successfully")
}

function onMongoDisconnected(err:Error) {
  console.log("MongodDB Disconnected - %o", err)
}

function onMongoError(error:Error) {
  console.log("MongodDB error", error)
}



app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(_req:Request, _res:Response, next:NextFunction):any {
  next(createError(404));
});

// error handler
app.use(function(err:Error, req:Request, res:Response, _next:NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;

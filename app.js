var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const crown_78_Router = require('./routes/crown_78');
const crown2_78_Router = require('./routes/crown2_78');
const api_78_Router = require('./routes/api_78');

const booksRouter = require('./routes/books_78');

/* midproj_xx */

const theme_78_Router = require('./routes/midproj_78');



/* finalproj_xx */

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/crown_78', crown_78_Router);
app.use('/crown2_78', crown2_78_Router);
app.use('/api_78', api_78_Router);

/* midproj_xx */

app.use('/theme_78', theme_78_Router);

app.use('/books',booksRouter);

/* finalproj_xx */

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

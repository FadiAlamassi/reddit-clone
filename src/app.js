const express = require('express');
const { join } = require('path');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const router = require('./controlles');

const app = express();

const port = process.env.PORT || 5000;
app.set('port', port);

app.use(cookieParser());
app.use(express.static(join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    layoutsDir: join(__dirname, 'views', 'layouts'),
    partialsDir: join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  }),
);
app.use(router);
module.exports = app;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 3001
const {sequelize} = require('./models/index');

var usersRouter = require('./routes/usuarioteste-route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ alter: true }).then(()=>{
    app.listen(port, () => {
      console.log('Example app listening at http://localhost:'+port)
    })
  })
app.use('/usuarioTeste', usersRouter);

module.exports = app;

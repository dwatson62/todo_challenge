var express = require('express');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/js',  express.static(__dirname + '/js'));
app.use('/css',  express.static(__dirname + '/css'));
app.use('/public/images',  express.static(__dirname + '/public/images'));

var server = app.listen(3000, function () {
  console.log('Server starting on port 3000');
});

app.get('/', function (req, res) {
  res.render('index.html');
});
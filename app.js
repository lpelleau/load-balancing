/**
 * IMPORT & VALUES
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');

/**
 * PARAMETERS
 */
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(bodyParser.json());
var ID = process.argv[2];
if (!ID) {
  console.log("usage: nodejs app.js <id>");
  return;
}

/**
 * JOB
 */
function work(size) {
  var i = size;
  while (i > 0) i--;
}

/**
 * ROUTES
 */
app.get('/', function(req, res) {
  res.render('index', { id: ID });
});

app.post('/work', function(req, res) {
  res.json({ id: ID })
  work(req.body.size);
});

/**
 * LISTEN
 */
app.listen(3000 + parseInt(ID), function () {
  console.log('App listening on localhost:' + (3000 + parseInt(ID)) + '!');
});

module.exports = app;

/**
 * IMPORT & VALUES
 */
var express = require('express');
var app = express();

/**
 * PARAMETERS
 */
app.set('view engine', 'jade');
app.use(express.static('public'));
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

app.get('/work/:size', function(req, res) {
  res.json({ id: ID })
  work(req.params.size);
});

/**
 * LISTEN
 */
app.listen(3000 + parseInt(ID), function () {
  console.log('App listening on localhost:' + (3000 + parseInt(ID)) + '!');
});


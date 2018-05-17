// server
var express = require("express");
var fs = require('fs');
var path = require('path');
var app = express();
// app.use(express.logger());

// app.get('/', function(request, response) {
//   response.send('Hello World 2!');
// });

app.get('/', function(request, response) {
  response.sendFile('index.html', { root: path.join(__dirname, '../client') });
});

// app.get('/main.bundle.js', function(request, response) {
//   console.log(request)
//   response.sendFile('main.bundle.js', { root: path.join(__dirname, '../client') });
// });

app.get('/*', function(request, response) {
  console.log(path.join(__dirname, '..', request.url));
  response.sendFile(request.url, { root: path.join(__dirname, '../client') });
});

app.use(function(err, req, response, next) {
  if (err) {
    response.sendFile('404.html', { root: path.join(__dirname, '../client') });
  }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
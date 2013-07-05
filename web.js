var express = require('express');
var fs = require('fs');

var file = fs.readFileSync("index.html");
var buffer = new Buffer(256);
buffer.write("Hello World", 0);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  response.send(buffer.toString("utf8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

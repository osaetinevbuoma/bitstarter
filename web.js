var express = require('express');
var fs = require('fs');

var file = fs.readFileSync("index.html", "utf8"); //second parameter converts file read to string
var buffer = new Buffer(256);
var len = buffer.write(file, 0); //calculates the length of the input and writes to buffer

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString("utf8", 0, len)); //converts the buffer to string
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

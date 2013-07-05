var express = require('express');
var fs = require('fs');

var index = fs.readFileSync("index.html");
var buffer = new Buffer(256);
buffer.write(index, "utf8");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  respone.send(buffer.toString("utf8", 0, index));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

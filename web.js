var express = require('express');
var fs = require('fs');

var file = fs.readFileSync("index.html", "utf8"); //second parameter converts file read to string
var buffer = new Buffer(file, "utf8");

var app = express.createServer(express.logger());

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

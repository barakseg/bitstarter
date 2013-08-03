var fs = require('fs');
var inFile = "index.html";
var express = require('express');
var app = express();
app.use(express.logger());

var msg = fs.readFileSync(inFile);

app.get('/', function(request, response) {
  response.send(msg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

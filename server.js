const express = require("express");
const app = express();

const logRequest = function(req, res, next) {
   //console.log(`Request: ${req.method} for ${req.path}`);
   req.logMessage = "Request: "+req.method+" for "+req.path;
   next();
};

app.use(logRequest);

app.get("/hello", function(req, res) {
   es.send("<h1>Hello, Express!</h1>" + '<p id="output">' + req.logMessage + "</p>");
});

app.listen(3000, function() {
   console.log("Listening on port 3000...");
});
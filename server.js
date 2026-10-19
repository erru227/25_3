const express = require("express");
const app = express();

//Basic page
app.get("/", function(req, res) {
   res.end("<h1>Hello World</h1>");
   next();
});

const web_files = express.static("public");

const logRequest = function(req, res, next) {
   res.type("html");  // tell the browser the content is HTML
   res.write('<p id="output">Request: ' + req.method + " for " + req.path + "</p>");
   next();
};

//First the web page files
app.use(web_files);
//Then the middleware function
app.use(logRequest);


app.get("/hello", function(req, res) {
   res.end("<h1>Hello, Express!</h1>");
});

app.post("/goodbye", function(req, res) {
   res.end('<head><link rel="stylesheet" href="/style.css"></head> <body><h1>Goodbye, Express!</h1></body>');
});

app.listen(process.env.PORT || 3000, function() {
   console.log("Listening on port 3000...");
});

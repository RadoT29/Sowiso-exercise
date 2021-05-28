var express = require("express");
var http = require("http");

var router = require("./routes/index");

var port = process.argv[2];
var app = express();

var a;
var b;

app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    a = Math.floor(Math.random()*1000);
    b = Math.floor(Math.random()*1000);
    res.render("homePage",{
        NumberA: a,
        NumberB: b
      });
});
app.post("/", function(req, res) {
    var result;
    req.body.answer == (a+b) ? result = true : result = false;
    res.send(JSON.stringify({
      correct: result
  }));
});

const server =  http.createServer(app);

server.listen(port, () =>{
    console.log("Server started on port: %s", port);
}); 
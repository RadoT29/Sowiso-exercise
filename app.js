var express = require("express");
var http = require("http");

var port = process.argv[2];
var app = express();

//These are our global variables.
var a;
var b;


app.use(express.static(__dirname + "/public"));
app.use(express.json());

//Setting up the viewing directory and template engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/**
 * Responsible for generating random numbers for a and b
 * It renders the ejs file with the generated numbers,
 * when the user lands on the website
 */
app.get("/", (req, res) =>{
    a = Math.floor(Math.random()*1000);
    b = Math.floor(Math.random()*1000);

    res.render("homePage",{
        NumberA: a,
        NumberB: b
      });
});

/**
 * Responsible for getting the user's input and deciding
 * if the input is correct or not.
 * @returns a message to the client, containing the decision.
 */
app.post("/", (req, res) =>{
    let actualResult = a+b;
    let input = req.body.answer;
    let message;
    if(input == actualResult){
       message = true;
    } else{
        message = false;
    }
    
    res.send(JSON.stringify({
      correct: message
  }));
});

const server =  http.createServer(app);

server.listen(port, () =>{
    console.log("Server started on port: %s", port);
}); 
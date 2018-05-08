const express = require('express')
const path = require('path');

const fileSystem = require('./fileSystem');

fileSystem.writeFile('test.JSON',JSON.stringify({a:5}));
fileSystem.readFileSync('test.JSON',function(fileData){
    console.log(fileData);
});

let app = express();

app.get('/', function(req, res){
    res.send("home page!");
});

app.get('/contact', function(req,res){
    res.send('Hello!');
});

app.get('/anhgai', function(req,res){
    console.log(__dirname);
    // res.sendFile(__dirname + "/blah.jpg");
    res.sendFile(path.resolve('./blah.jpg'));
});

app.get('/study', function(req,res){
    res.sendFile(path.resolve('session2/practice.html'));
})

app.use(express.static('public'));

app.listen(8000, function(err){
    if(err) console.log(err);
    else console.log("server is up");
});
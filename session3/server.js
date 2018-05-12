const express = require('express');
const path = require('path');
const request = require('request');

let app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.resolve("/index.html"))
});

app.get('/web:id',function(req,res){
    request('https://btvn-web12.herokuapp.com/api/web' + req.params.id, function (err, response, body) {
        if(err) console.log(err)
        else{
            var members = "";
            let data = JSON.parse(body);
            for(name of data.data){
                members += `<li>${name}<li>`;
                // members += `${name}`;
            }
        }
        res.send(members);
    });
    
});

app.listen(8000, function(err){
    if(err) console.log(err);
    else console.log("server is up");
});
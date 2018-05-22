const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const GirlModel = require('./models/girls.model');
const bodyParser = require('body-parser');

//Route
const girlsRouter = require('./router/girlRouter');
const uploadRouter = require('./router/uploadRouter');

//Connect DB
mongoose.connect('mongodb://localhost/Girls',(err) =>{
    if(err) console.log(err);
    else console.log("Db connect success");
});

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
//khai bao engine
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
// dat view engine cua app la 'handlebars'
app.set("view engine", "handlebars");

app.use('/girl',girlsRouter);
app.use('/upload',uploadRouter);

app.get('/',function(req,res){
    GirlModel.find({},function(err,profiles){
        if(err) throw err;
        else{
            console.log("Retrieved list of girls");
        }
        res.render('home',{
            girls: profiles,
        });
    })
})


app.listen(8000, function(err){
    if(err) console.log(err);
    else console.log("server is up");
});
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('fs');
const questionRouter = require('./router/questionRouter');
const mongoose = require('mongoose');

const QuestionModel = require('./models/question.model');

mongoose.connect('mongodb://localhost/zo',(err) =>{
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

app.use('/question',questionRouter);

//Random Question
app.get('/',function(req,res){
    QuestionModel.find({},function(err,questions){
        if(err) console.log(err);
        else{
            console.log('Retrieved list of questions');
        }
        let question_index = Math.floor(Math.random()*questions.length)
        let questionRandom = questions[question_index];
        
        res.render('question',{
            question: questionRandom,
        })
    });

});

app.get('/ask', (req,res) => {
    res.render('ask');
})

app.get('/list', (req,res) =>{
    let datas = [
        "Saab",
        "Volvo",
        "BMW"
    ];

    res.render('list',{datas});
})

app.post('/api/question',function(req,res){
    let quesCont = req.body.question;
    let newQuestion = {
        content : quesCont
    };

    QuestionModel.create(newQuestion,(err,questionCreated)=>{
        if(err) console.log(err)
        else console.log("Question created");
        
        res.redirect(`/question/${questionCreated._id}`);
    });
   
});


app.listen(8000, function(err){
    if(err) console.log(err);
    else console.log("server is up");
});
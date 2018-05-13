const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

//khai bao engine
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
// dat view engine cua app la 'handlebars'
app.set("view engine", "handlebars");

app.get('/',function(req,res){
    let questionId = req.params.id;
    let questionList =JSON.parse(fs.readFileSync('./questionList.json'));

    let questionFound = questionList[Math.floor(Math.random()*questionList.length)]

    res.render('question',{
        question: questionFound,
    })

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
    console.log("Creat new question");
    // req.on("data", function(data){
    //     console.log(data);
    // })
    console.log(req.body);
    let questionList = fs.readFileSync('./questionList.json','utf-8');

    questionList =  JSON.parse(questionList);

    let newQuestion = {
        questionContent : req.body.question,
        id: questionList.length,
        yes: 0,
        no: 0
    };

    questionList.push(newQuestion);
    fs.writeFileSync('./questionList.json',JSON.stringify(questionList),'utf-8');

    res.redirect(`/question/${newQuestion.id}`);
});

app.get('/question/:id',function(req,res){
    let questionId = req.params.id;
    let questionList =JSON.parse(fs.readFileSync('./questionList.json'));

    let questionFound = questionList.filter(question => question.id == questionId)[0];

    res.render("question", {
        question: questionFound,
    })
})


app.listen(8000, function(err){
    if(err) console.log(err);
    else console.log("server is up");
});
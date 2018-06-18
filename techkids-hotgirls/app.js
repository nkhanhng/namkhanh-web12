const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session')

const ImageApiRouter = require('./modules/api/images/router')
const UserApiRouter = require('./modules/api/users/router')
const AuthRouter = require('./modules/api/auth/router');

mongoose.connect("mongodb://localhost/techkids-hotgirl",(err) =>{
    if(err) throw err;
    else{
        console.log("DB connected")
    }
})

let app = express();

app.use(session({
    secret: 'sjdsj',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    }
}))

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api/images', ImageApiRouter)
app.use('/api/users', UserApiRouter)
app.use('/api/auth',AuthRouter)





app.listen(3000,(err)=>{
    if(err) throw err;
    else{
        console.log("Server is lauching")
    }
})
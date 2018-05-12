const express = require('express');

let app = express();

var request = require('request');

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

// app.get('/web:webclass',(req,res)=>{
//     request('https://btvn-web12.herokuapp.com/api/web' + req.params.webclass , function (error, response, body) {
//     console.log('error:', error);
//     console.log('body:', body); 
// //   condition ? true : false;
//     if(body){
//         let data = JSON.parse(body);
        
//         // let htmlData = "";

//         // data.data.forEach((item) => {
//         //     htmlData = `${htmlData}<li>${item}</li>`;
//         // });

//         let htmlData = data.data.map((item)=>{
//             return `<li>${item}</li>`;
//         }).join("")

//         res.send(`<ul>${htmlData}</ul>`);
//     }
//     });
// });

//CALLBACK
app.get('/web:webclass',(req,res) =>{
    let url = 'https://btvn-web12.herokuapp.com/api/web' + req.params.webclass
    getDataByUrl(url, (dataFromUrl) =>{
        let htmlData = "";
        dataFromUrl.data.forEach((item) => {
            htmlData = `${htmlData}<li>${item}</li>`;
        });

        res.send(`<ul>${htmlData}</ul>`);
    });
});

function getDataByUrl(url, onGetDataDone){
    request(url,function(error,response,body){
        console.log('error: ',error);
        if(body){
            try{
                let data = JSON.parse(body);
                onGetDataDone(data);
            }catch(error){
                console.log(error);
            }
        }
    })
}



app.listen(8080,(err)=>{
    if(err) console.log(err);
    else console.log("server is up");
});
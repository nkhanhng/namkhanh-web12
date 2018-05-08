const fs = require('fs');

// let obj = {
//     a: 5,
//     b: 1
// }


// console.log("Begin write file!");

// fs.writeFileSync('test.txt',JSON.stringify(obj));

// console.log("End write file");


// // fs.readFile('./test.txt',function(err,data){
// //     if(err) console.log(err);
// //     console.log("Read file success, Data: "+ data);
// // });

// let dataFilesync =  fs.readFileSync('test.txt',{encoding: 'utf-8'});
// let dataFileobj = JSON.parse(dataFilesync);
// console.log(dataFileobj);
// console.log('end read file sync');


const writeFile = function(filename, data){
    fs.writeFileSync(filename, data);
}

const readFileSync = function(path, onReadFileDone){
    fs.readFile(path,'utf-8', function(err,data){
        onReadFileDone(data);
    });
}

module.exports = {
    writeFile,
    readFileSync
}
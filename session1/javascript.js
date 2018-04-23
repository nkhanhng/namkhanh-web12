// const CONSTVAR = 10

// //var - function scope
// //global - nodejs, window - browser

// var a = 5

// function testFuntionScope(){
//     var a = 7;
//     if (1+1 == 2) {
//         var a = 10;
//     }
//     console.log(a); 
// }

// testFuntionScope()
// console.log(a);

//let - block scope

// let a = 5;
// function testLet(){
//     let b = 10;
//     console.log(a);
//     console.log(b);
// }

// testLet()
// console.log(a);

// setTimeout(function(){
//     console.log("1s")
// },1000)

// function countDown(count){
//     for (let i = count; i >= 0; i--){
//         setTimeout(function() {
//             console.log(i)
//         }, 1000*(count - i));
//     }
// }

// countDown(5)


// function name(param1, param2){
//     console.log(param1);
//     console.log(param2);
// }

// name(1);

// const name = function(param1){

// }


// const name = (param1) => {
//     console.log(param1);
// }

// let nameClone = name

// nameClone(2)
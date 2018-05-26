let wait5s = function(cb){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("asdadw");
        }, 2000);
    })
}


const asyncFunction = async() => {
    try {
        console.log("Start");

        let data =  await wait5s();
        console.log(data);
        console.log("2s");

        await wait5s();
        console.log("2s")
    } catch (error) {
        console.log(error);   
    }
    
}

asyncFunction();
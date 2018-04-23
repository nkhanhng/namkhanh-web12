'use strict'

function sort(input) {
  let temp = 0;
  for(let i = 0; i < input.length;i++){
    for(let j = 0; j < input.length;j++){
        if(input[i] < input[j]){
            temp = input[i];
            input[i] = input[j];
            input[j] = temp;
        }
    }
  }
  return input;
}

module.exports = sort

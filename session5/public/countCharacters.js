let character = 200
let textArea = document.getElementById('question');

textArea.addEventListener('input',function(){
    let remainCharacter = character - textArea.value.length;
    document.getElementById('characterRemaining').innerText = remainCharacter;
})
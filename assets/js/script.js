//Wait the DOM to finish loading before running the game
//Get the button elements and ass event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit'){
                alert('You clciked submit!');
            } else{
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }

        })
    }
})
function runGame(){

}

function checkAnswer(){

}

function calcCorrectAns(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAddQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultipleQuestion(){

}
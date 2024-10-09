//Wait the DOM to finish loading before running the game
//Get the button elements and ass event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit'){
                checkAnswer();
            } else{
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }

        })
    }
    //the below code listens for a keydown, the Enter key and checks the Answer- also aids user experience
    document.getElementById("answer-box").addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            checkAnswer();
        }
    })

    runGame("addition");
})
/**
 *The main game "loop", called when the script is first loaded
 *and  after the user's answer has been processed
 */
function runGame(gameType) {

    //empty out the answer box for better user experience & usability
    document.getElementById("answer-box").value = "";

    //setting the focus: let us keep the cursor at the answer box rather than have the user click on it again
    document.getElementById("answer-box").focus(); //to keep the cursor in place for the user

    //creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

    if (gameType === "addition"){
        displayAddQuestion(num1,num2);
    } else if (gameType === "multiply"){
        displayMultipleQuestion(num1,num2);
    } else if (gameType === "subtract"){
        displaySubtractQuestion(num1,num2);
    } else{
            alert(`Unknown game type: ${gametype}`);
            throw `Unknown game type: ${gameType}.Aborting!`;
        }
    

}
/**
*Checks the answer against the first element in
* the reurned calculateCorrectAnswer array
*/
function checkAnswer(){

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calcCorrectAns();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect){
        alert('Hey, you got it right :D')
        incrementScore();
    } else{
        alert(`Aww.. you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}
/**
 * Gets the operands (the numbers) and the operator(plus, .minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calcCorrectAns(){

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === '+'){
        return [operand1 + operand2, "addition"];
    } else if(operator === 'x'){
        return [operand1 * operand2, "multiply"];
    } else if(operator === '-'){
        return [operand1 - operand2, "subtract"];
    }  else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, Aborting!`;
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore(){

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById('score').innerText = ++oldScore; //note the use of the ++ behind the variable and not after
    
}


/**
 * Gets the current tally of incorrect ans from the DOM and increments it by 1
 */
function incrementWrongAnswer(){

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAddQuestion(operand1, operand2){

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';

}

function displaySubtractQuestion(operand1, operand2){

    //notice the use of ternary statement to set the operands!
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1: operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2: operand1;
    document.getElementById('operator').textContent = '-';

}

function displayMultipleQuestion(operand1, operand2){

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';

}

function displayDivideQuestion(){

}
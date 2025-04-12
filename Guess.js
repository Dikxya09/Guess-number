let userInput = document.getElementById('guess');
let guess = document.getElementById('abc');
let tries = document.getElementById('try');
let inputType = document.getElementById('tries');
let btn = document.getElementById('button');
let idea = document.getElementById('idea');
let hint = document.getElementById('hint');
let img = document.getElementById('img-hide');

let randomNumber ='';
window.onload = (event) =>{
  randomNumber = parseInt(Math.random() * 51);
  console.log(randomNumber);
}
btn.addEventListener('click', function() {

    if(+userInput.value === randomNumber){
        img.style.display = 'block';
    }
    else{
        
        if(userInput.value > randomNumber)
            {
                hint.innerHTML = "Your guess is greater than actual number";
            }
            else{
                hint.innerHTML = "Your guess is lower than actual number";
            }
            inputType.innerHTML-=1;
            
    }
         
}
);
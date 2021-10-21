import validator from './validator.js';


const enterButton = document.getElementsByClassName("enterButton")[0];

enterButton.addEventListener('click', cardNumber)

function cardNumber (){

    let maskify = document.getElementById("valueInput").innerHTML = validator.maskify(document.getElementsByClassName("cardNumber")[0].value);

    document.getElementById("number").style.display="none"
    document.getElementById("valueInput").style.display="block"
  
    console.log(maskify)
    return maskify
    
}


console.log(validator);

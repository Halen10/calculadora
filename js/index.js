const input = document.querySelector(".input");

const btnC = document.querySelector(".btnC");
const btnB = document.querySelector(".btnB");
const btn = document.querySelector(".btn");
const btnD = document.querySelector(".btnD");

const btnM = document.querySelector(".btnM");
const btn9 = document.querySelector(".btn9");
const btn8 = document.querySelector(".btn8");
const btn7 = document.querySelector(".btn7");

const btnR = document.querySelector(".btnR");
const btn6 = document.querySelector(".btn6");
const btn5 = document.querySelector(".btn5");
const btn4 = document.querySelector(".btn4");

const btnS = document.querySelector(".btnS");
const btn3 = document.querySelector(".btn3");
const btn2 = document.querySelector(".btn2");
const btn1 = document.querySelector(".btn1");

const btnP = document.querySelector(".btnP");
const btn0 = document.querySelector(".btn0");
const btnI = document.querySelector(".btnI");

let operador
let nun1
let num2

btn0.addEventListener("click",(e)=>{
    input.innerHTML += "0";
});
btn1.addEventListener("click",(e)=>{
    input.innerHTML += "1";
});
btn2.addEventListener("click",(e)=>{
    input.innerHTML += "2";
});
btn3.addEventListener("click",(e)=>{
    input.innerHTML += "3";
});
btn4.addEventListener("click",(e)=>{
    input.innerHTML += "4";
});
btn5.addEventListener("click",(e)=>{
    input.innerHTML += "5";
});
btn6.addEventListener("click",(e)=>{
    input.innerHTML += "6";
});
btn7.addEventListener("click",(e)=>{
    input.innerHTML += "7";
});
btn8.addEventListener("click",(e)=>{
    input.innerHTML += "8";
});
btn9.addEventListener("click",(e)=>{
    input.innerHTML += "9";
});
btnP.addEventListener("click",(e)=>{
    if(!input.textContent.includes(".")){
        input.innerHTML += ".";
    }
});

btnC.addEventListener("click",(e)=>{
    input.innerHTML = "";
});
btnB.addEventListener("click",(e)=>{
    input.innerHTML = input.textContent.slice(0,-1);
});
btnS.addEventListener("click",(e)=>{
    num1 = input.innerHTML;
    operador = "+";
    input.textContent = "";
});
btnR.addEventListener("click",(e)=>{
    num1 = input.textContent;
    operador = "-";
    input.textContent = "";
});
btnM.addEventListener("click",(e)=>{
    num1 = input.textContent;
    operador = "*";
    input.textContent = "";
});
btnD.addEventListener("click",(e)=>{
    num1 = input.textContent;
    operador = "/";
    input.textContent = "";
});
btnI.addEventListener("click",(e)=>{
    num2 = parseFloat(input.textContent);
    if(input.textContent !== ""){
        switch(operador){
            case "+": suma(num1, num2); break;

            case "-": resta(num1, num2); break;
            
            case "*": Multiplicacion(num1, num2); break;
            
            case "/": division(num1, num2); break;
        }
    }else{
        console.log("error")
    }
});

function suma(num1, num2){
    let result =  parseFloat(num1) + parseFloat(num2);
    input.innerHTML = result
}

function resta(num1, num2){
    let result = parseFloat(num1) - parseFloat(num2);
    input.innerHTML = result
}

function Multiplicacion(num1, num2){
    let result = parseFloat(num1) * parseFloat(num2);
    input.innerHTML = result
}

function division(num1, num2){
    let result
    
    if(num2 === 0){
        result = "Error"
    }else{
        result = parseFloat(num1) / parseFloat(num2);
    }
    input.innerHTML = result;
}

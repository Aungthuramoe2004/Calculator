let num1error = document.getElementById("num1error");
let num2error = document.getElementById("num2error");
let operatorerror = document.getElementById("operatorerror");
let operator = document.getElementById("op");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
// let reset = document.getElementById("reset")
let finalresult;
let num1status,num2status,operatarstatus=false;

num1error.style.display="none";
num2error.style.display="none";
operatorerror.style.display="none";

submit.addEventListener("click",function(){
  let firstnumber = document.getElementById("fn");
let secondnumber = document.getElementById("sn");
let operator = document.getElementById("op");

checkValidation(firstnumber,secondnumber,operator);

if(num1status==false && num2status==false && operatarstatus==false){

    firstnumber=parseInt(firstnumber.value);
    secondnumber=parseInt(secondnumber.value);
    console.log(firstnumber)
    switch(operator.value){
        case"+":
          finalresult= firstnumber+secondnumber;
          break;
        case"-":
          finalresult= firstnumber-secondnumber;
          break;
        case"*":
          finalresult= firstnumber*secondnumber;
          break;
        case"/":
          finalresult= firstnumber/secondnumber;
          break;
        case"%":
          finalresult= firstnumber%secondnumber;
          break;
    }
      result.innerHTML=finalresult;
  }
})

function checkValidation(firstnumber,secondnumber,operator){
  if(firstnumber.value==""||firstnumber.value==null||firstnumber.value==undefined) {
    num1error.style.display="block"
    num1status=true;
  }else{
    num1error.style.display="none"
    num1status=false;
  }
  if(secondnumber.value==""||secondnumber.value==null||secondnumber.value==undefined) {
    num2error.style.display="block"
    num2status=true
  }else{
    num2error.style.display="none"
    num2status=false;
  }
  if(operator.value == "dropdown") {
    operatorerror.style.display="block"
    operatarstatus=true;
  }else{
    operatorerror.style.display="none"
    operatarstatus=false;
  }
}
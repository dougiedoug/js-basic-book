var nameInfo= document.querySelector("#shippingName");
var tellInfo= document.querySelector("#shippingTel");
var addInfo = document.querySelector("#shippingAddr");

var check = document.querySelector("#shippingInfo");

check.addEventListener("click",function(){
    if(check.checked== true){
        nameInfo.value = document.querySelector("#billingName").value; 
        tellInfo.value = document.querySelector("#billingTel").value;
        addInfo.value = document.querySelector("#billingAddr").value;
    }else{
        nameInfo.value = ""; 
        tellInfo.value = "";
        addInfo.value = "";
    }
})
var myText= document.getElementById("myText");
var isClicked=false
myText.addEventListener("click",function(){
    if (isClicked==false){
        myText.style.color = "blue";
        myText.style.backgroundColor="#ccc";
        myText.style.fontSize="20px";
        isClicked=true;
    }else{
        myText.style.color = "black";
        myText.style.backgroundColor="white";
        myText.style.fontSize="10px";
        isClicked=false;
    }
    
})


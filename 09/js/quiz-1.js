var checkList = document.querySelectorAll(".checkbx");


for (var i=0;i<checkList.length;i++){
    checkList[i].addEventListener("click",addPrice);
}

function addPrice(){
    var sum = 24000; 
    for(var i=0;i<checkList.length;i++){
        if(checkList[i].checked==true){
            sum+=parseInt(checkList[i].value);
        }
    }
    document.querySelector("#total").value= '총 '+sum+'원';
}
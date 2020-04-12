var calBttn = document.querySelector("#start");
calBttn.addEventListener("click",function(){
    var radius = document.querySelector("#radius").value;
    document.querySelector("#round").value=Math.round(2*radius*3.14);
    document.querySelector("#area").value=Math.round(radius*radius*3.14);
})
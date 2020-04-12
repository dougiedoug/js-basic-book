window.onload = openPopup;

function openPopup(){
    var newWin = window.open("current.html","","width=300,height=100");
    if (newWin==null){
        alert("팝업창이 차단되어 있습니다.");
    }
}
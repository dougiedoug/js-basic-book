var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

userId.onchange = checkId;


function checkId(){
    if(userId.value.length<4 || userId.value.length>15){
        alert("ID는 4자리 이상 15자리 이하로 해주세요.");
        userId.value="";
        userId.select();
    } 
}


function checkPw(){
    if(pw1.value.length<8){
        alert("pw 는 8자리 이상으로 해주세요.");
        pw1.value="";
        pw1.focus();
    }
}

function comparePw(){
    if(pw1.value!=pw2){
        alert("두 비밀번호가 같은지 확인 부탁드려요.");
        pw2.value="";
        pw2.select();
    }
}
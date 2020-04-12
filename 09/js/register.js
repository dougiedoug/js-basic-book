var user_id = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

user_id.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = checkPwSame;

function checkId(){
    if(user_id.value.length<4 || user_id.value.length>12){
        alert("4~15자리의 아이디를 입력하세요. ");
        user_id.select();
    }
}

function checkPw(){
    if(pw1.value.length<8){
        alert("8자리 이상의 비밀번호를 입력하세요. ");
        pw1.value="";
        pw1.focus();
    }
}

function checkPwSame(){
    if (pw1.value != pw2.value){
        alert("두 암호가 다릅니다. 확인해주세요.");
        pw2.value="";
        pw2.focus();

    }
}

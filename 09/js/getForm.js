var selectMenu = document.testForm.major;

function displaySelect(){
	var selectedMajor = selectMenu.options[selectMenu.selectedIndex].innerText;

	alert(selectedMajor +"를 선택하셨네요.");
}


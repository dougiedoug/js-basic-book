var itemList= [];
var addBtn = document.querySelector("#add");
addBtn.addEventListener("click",addList);
document.addEventListener("keypress",function(e){document.querySelector("#item").focus();})
document.querySelector("#item").addEventListener("keypress",function(e){
	if(e.keyCode===13){
		e.preventDefault();
		addList();
	}
})

function addList(){
	var item = document.querySelector("#item").value;
	if(item.length>0){
		itemList.push(item);
	}
	
	document.querySelector("#item").value="";
	document.querySelector("#item").focus();

	showList();
}

function showList(){
	var list = "<ul>"
	for (var i=0;i<itemList.length;i++){
		list+="<li>"+itemList[i]+"<span class='close' id="+i+">X</span></li>";
	}
	list+="</ul>";
	document.querySelector("#itemlist").innerHTML=list;
	
	var remove=document.querySelectorAll(".close");
	for(var i=0;i<remove.length;i++){
		remove[i].addEventListener("click",removeList);
	}
}

function removeList(){
	var itemNumber=this.getAttribute("id");	
	itemList.splice(itemNumber,1);
	showList();
}
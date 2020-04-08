		var numbers = [2, 4, 6, 8, 10];
		showArray(numbers);
		var addBtn = document.querySelector("#add");
		addBtn.addEventListener("click",addArray);
		
		
		function showArray(arr) {
			var str = "<table><tr>";
			for (var i=0; i<arr.length; i++) {
				str += "<td>" + arr[i] + "</td>";
			}
			str += "</tr></table>";
			document.querySelector("#contents").innerHTML=str;
		}

		function addArray(){
			var new_number=0;
			for (var i=0;i<numbers.length;i++){
				new_number+=numbers[i];
			}
			numbers.push(new_number);
			showArray(numbers);
		}


var  chek= false;
var myArrayX = ['','A', 'B', 'C', 'D', 'E', 'F', 'G','H'];
var myArrayY = ['','1', '2', '3', '4', '5', '6', '7','8'];
window.onload = function() {
	box = document.getElementById("box");
	newGame();
}



function newGame(){

	var table = document.createElement("table"),
		tbody = document.createElement("tbody");
	table.appendChild(tbody);
  tem = 0;
	for(i = 0; i <= 8; ++i){
		var row = document.createElement("tr");
		for(j = 0; j <= 8; ++j){
			var cell = document.createElement("td");
			if (i==0 && j == 0) {
			 row.appendChild(cell);
			 continue;
			}
			if (i==0) { //буквы столбцов
			 cell.innerHTML =  myArrayX[j];
			 row.appendChild(cell);
			 continue;
			}
			if (j==0) { //цифры строк
			 cell.innerHTML =  i;
			 row.appendChild(cell);
			 continue;
			}
			if (i!=0) {

			var but = document.createElement("button");
				but.id = i + "_" + j;
        but.onclick = OnButClick;
        but.className = !chek?'color5':'color';
				chek= !chek;
        //cell.innerHTML = arr[tem];
				cell.appendChild(but);
			}
      row.appendChild(cell);
}
  	tbody.appendChild(row);
		chek = (i%2 != 0);
	}
	box.appendChild(table);
}

function OnButClick (event) { //обработка клика по кнопкам
	cleardoska();
  var event = event || window.event,
		el = event.srcElement || event.target;
    //el.text="asdasd";
		el.className = "color2";
		var strID = el.id;
		var array = strID.split("_");
i=array[0];
j=array[1];
//alert(i+j);
var kX = Number(i);
var kY = Number(j);
for (var x = -2; x <= 2; x++) {
	for (var y = -2; y <= 2; y++){
		if (x!=y && x*y!=0 && x!=-y)  {
					if (kX+x >=1 && kX+x <=8 && kY+y >=1 && kY+y <=8  ) {
						//alert(kX+x+"_"+Number(kY+y));
						ii = kX+x;
						jj = kY+y;
						//alert(ii+"_"+jj);
            kl = document.getElementById(ii+"_"+jj);
						kl.className = "color3";
						//rez+= " " + myArrayX[kX+x]+myArrayY[kY+y];
					}
			}

	}
}
}

function cleardoska() {

	for(i = 1; i <= 8; ++i){
		for(j = 1; j <= 8; ++j){
			btn = document.getElementById(i+"_"+j);
			btn.className = !chek?'color5':'color';
			chek= !chek;
		}
		chek = (i%2 != 0);
	}
}

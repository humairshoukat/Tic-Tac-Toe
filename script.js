flag = 0;

// Functions that check turn of the player and put accordingly value X or 0.
function f1() {
	if (flag == 0) {
		document.getElementById("box1").value = "X";
	    document.getElementById("box1").disabled = true;
		flag = 1;
	}
	else {
		document.getElementById("box1").value = "0";
		document.getElementById("box1").disabled = true;
		flag = 0;
	}
	myfun();
}

function f2() {
	if (flag == 0) {
		document.getElementById("box2").value = "X";
		document.getElementById("box2").disabled = true;
		flag = 1;
	}
	else {
		document.getElementById("box2").value = "0";
		document.getElementById("box2").disabled = true;
		flag = 0;
	}
	myfun();
}

function f3() {
	if (flag == 0) {
		document.getElementById("box3").value = "X";
		document.getElementById("box3").disabled = true;
		flag = 1;
	}
	else {
		document.getElementById("box3").value = "0";
		document.getElementById("box3").disabled = true;
		flag = 0;
	}
	myfun();
}

function f4() {
	if (flag == 0) {
		document.getElementById("box4").value = "X";
		document.getElementById("box4").disabled = true;
		flag = 1;
	}
	else {
		document.getElementById("box4").value = "0";
		document.getElementById("box4").disabled = true;
		flag = 0;
	}
	myfun();
}

function f5() {
	if (flag == 0) {
		document.getElementById("box5").value = "X";
		document.getElementById("box5").disabled = true;
		flag = 1;
    }
	else {
		document.getElementById("box5").value = "0";
		document.getElementById("box5").disabled = true;
		flag = 0;
	}
	myfun();
}

function f6() {
	if (flag == 0) {
		document.getElementById("box6").value = "X";
		document.getElementById("box6").disabled = true;
		flag = 1;
	}
	else {
		document.getElementById("box6").value = "0";
		document.getElementById("box6").disabled = true;
		flag = 0;
	}
	myfun();
}

function f7() {
	if (flag == 0) {
		document.getElementById("box7").value = "X";
		document.getElementById("box7").disabled = true;
		flag = 1;
	}
	else {
		document.getElementById("box7").value = "0";
		document.getElementById("box7").disabled = true;
		flag = 0;
	}
	myfun();
}

function f8() {
	if (flag == 0) {
		document.getElementById("box8").value = "X";
		document.getElementById("box8").disabled = true;
		flag = 1;
	}
	else {
		document.getElementById("box8").value = "0";
		document.getElementById("box8").disabled = true;
		flag = 0;
	}
	myfun();
}

function f9() {
	if (flag == 0) {
		document.getElementById("box9").value = "X";
		document.getElementById("box9").disabled = true;
		flag = 1;
	}
	else {
		document.getElementById("box9").value = "0";
		document.getElementById("box9").disabled = true;
		flag = 0;
	}
	myfun();
}

// Function to Reset the Game
function f10() {
	location.reload();
	/*document.getElementById('box1').value = '';
	document.getElementById("box2").value = '';
	document.getElementById("box3").value = '';
	document.getElementById("box4").value = '';
	document.getElementById("box5").value = '';
	document.getElementById("box6").value = '';
	document.getElementById("box7").value = '';
	document.getElementById("box8").value = '';
	document.getElementById("box9").value = '';*/
}


// Function called whenever user tab on any box
function myfun() {

	var box1, box2, box3, box4, box5, box6, box7, box8, box9;
	box1 = document.getElementById("box1").value;
	box2 = document.getElementById("box2").value;
	box3 = document.getElementById("box3").value;
	box4 = document.getElementById("box4").value;
	box5 = document.getElementById("box5").value;
	box6 = document.getElementById("box6").value;
	box7 = document.getElementById("box7").value;
	box8 = document.getElementById("box8").value;
	box9 = document.getElementById("box9").value;

	// Checking if Player X won or not
	if ((box1 == 'X') && (box2 == 'X') && (box3 == 'X')) {
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert('Player X won');
		f10();
	}
	else if ((box1 == 'X') && (box4 == 'X') && (box7 == 'X')) {
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert('Player X won');
		f10();
	}
	else if ((box7 == 'X') && (box8 == 'X') && (box9 == 'X')) {
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		window.alert('Player X won');
		f10();
	}
	else if ((box3 == 'X') && (box6 == 'X') && (box9 == 'X')) {
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		window.alert('Player X won');
		f10();
	}
	else if ((box1 == 'X') && (box5 == 'X') && (box9 == 'X')) {
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		window.alert('Player X won');
		f10();
	}
	else if ((box3 == 'X') && (box5 == 'X') && (box7 == 'X')) {
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert('Player X won');
		f10();
	}
	else if ((box2 == 'X') && (box5 == 'X') && (box8 == 'X')) {
		document.getElementById("box1").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert('Player X won');
		f10();
	}
	else if ((box4 == 'X') && (box5 == 'X') && (box6 == 'X')) {
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert('Player X won');
		f10();
	}

	// Checking if Player O won or not
	else if ((box1 == '0') && (box2 == '0') && (box3 == '0')) {
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert('Player 0 won');
		f10();
	}
	else if ((box1 == '0') && (box4 == '0') && (box7 == '0')) {
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert('Player 0 won');
		f10();
	}
	else if ((box7 == '0') && (box8 == '0') && (box9 == '0')) {
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		window.alert('Player 0 won');
		f10();
	}
	else if ((box3 == '0') && (box6 == '0') && (box9 == '0')) {
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		window.alert('Player 0 won');
		f10();
	}
	else if ((box1 == '0') && (box5 == '0') && (box9 == '0')) {
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		window.alert('Player 0 won');
		f10();
	}
	else if ((box3 == '0') && (box5 == '0') && (box7 == '0')) {
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert('Player 0 won');
		f10();
	}
	else if ((box2 == '0') && (box5 == '0') && (box8 == '0')) {
		document.getElementById("box1").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert('Player 0 won');
		f10();
	}
	else if ((box4 == '0') && (box5 == '0') && (box6 == '0')) {
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert('Player 0 won');
		f10();
	}

	// Checking about Tie
	else if ((box1 == 'X' || box1 == '0') && (box2 == 'X' || box2 == '0') && (box3 == 'X' || box3 == '0') 
	    && (box4 == 'X' || box4 == '0') && (box5 == 'X' || box5 == '0') && (box6 == 'X' || box6 == '0') 
		&& (box7 == 'X' || box7 == '0') && (box8 == 'X' || box8 == '0') && (box9 == 'X' || box9 == '0')) {
			window.alert('Match Tie. Click Ok to Restart');
			f10();
	}

}

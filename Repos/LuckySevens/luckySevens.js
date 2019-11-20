// rolls dice
function rollDice() {
	return Math.floor(Math.random() * 6) +1;
}

// function to run the game
function playGame() {
	var bet = Number(document.forms["feelingLucky"]["bet"].value);
	var totalRolls = 0;
	var biggestWin = 0;
	var rollAtBiggestWin = 0;
	var gameMoney = bet;
	var firstRoll;
	var secondRoll;
	var rollSum;
	
	if (gameMoney <= 0) { // check if has more than $0
		alert("You need more than $0.00 to play!");
	} 
	else {
		while (gameMoney > 0) { // keep playing as long as money available
			firstRoll = rollDice();
			secondRoll = rollDice();
			rollSum = firstRoll + secondRoll;
			totalRolls += 1;
			
			if (rollSum != 7) { // lose if roll isn't 7
				gameMoney--;
				console.log("Loss")
			}
			else { // win if roll 7
				gameMoney += 4;
				if(gameMoney > biggestWin){ // track when user had most money
					biggestWin += (gameMoney - biggestWin);
					rollAtBiggestWin = totalRolls;
				}
				console.log("Win");
			}
		}
	}

	document.getElementById("results").style.display = "block"; // change table to visible
	document.getElementById("playButton").innerText = "Play Again";
	
	// set the values for the results table
	document.getElementById("startingBet").innerText = bet;
	document.getElementById("totalRolls").innerText = totalRolls;
	document.getElementById("biggestWin").innerText = biggestWin;
	document.getElementById("rollAtBiggestWin").innerText = rollAtBiggestWin;
	
	return false;
}

function rollDice(){
	let randomNumber1 = Math.floor(Math.random()*6)+1; 
	let randomNumber2 = Math.floor(Math.random()*6)+1;

	document.querySelector('.img1').src="image/dice" + randomNumber1 + ".png";
	document.querySelector('.img2').src="image/dice" + randomNumber2 + ".png";

	if(randomNumber1 > randomNumber2)
	{
	document.querySelector('p').innerHTML = "PLAYER 1 WINS";
	}
	else if(randomNumber1 < randomNumber2)
	{
		document.querySelector('p').innerHTML = "PLAYER 2 WINS";
	}
	else
	{
		document.querySelector('p').innerHTML = "IT'S A DRAW";
	}
}



var names = [

"sam",
"aditi",
"someoneelse",
"third person",
];


var numbers = [];


function makeArray(howmany) {
	

	for(var i = 0; i < howmany; i ++) {
		numbers.push(randomRound(0, 100));
	}

	return(numbers);
}

function getAName(whichone) {
	var result = names[randomRound(0, names.length)];
	return [result, Math.floor(Math.random()*100), "hello"];

	console.log("this willl never happen");


}


function randomRound(min, max) {
	var range = max - min;
	var offset = min;
	return Math.floor(Math.random()*range) + offset;
}












function bogus(whichone) {
	var result = names[whichone];
}
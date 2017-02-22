$(document).ready(function(){



var link = document.getElementById("input").value;

if (link == "comics") {

	window.open("comic/page1.html")
}

else if (link == "readings") {

	window.open("readings/readings.html")
}

else {

	$(".error").append("error")

}












});
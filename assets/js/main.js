console.log("Hello World from main.js!");


var changeRobot = function() {
	console.log("change robot");
	
	// This function is already set up to run when the user presses the "Go!" button.
	
	// It needs to change the robot to look like what the user typed into the fields
	// You'll need to read up on input fields a little https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
}

document.querySelector(".go").addEventListener("click", changeRobot)
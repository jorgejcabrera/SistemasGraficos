var currentlyPressedKeys = {};

//se llaman solo una vez y cuando se presiona una tecla
function handleKeyDown(event) {
	currentlyPressedKeys[event.keyCode] = true;
}

function handleKeyUp(event) {
    currentlyPressedKeys[event.keyCode] = false;
}
  
//Al estar adentro del tick, se llamaria siempre
//Los codigos de las teclas fueron sacados de esta página http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
function handleKeyPresses(){
	if (currentlyPressedKeys[65] || currentlyPressedKeys[68]) {
	//Mover a izquierda o derecha
		if (currentlyPressedKeys[65]){
			posicionVisionX = -0.02;
		} else {posicionVisionX = 0.02;}		
	} else {posicionVisionX = 0;}
	
	if (currentlyPressedKeys[83] || currentlyPressedKeys[87]) {
		//Mover hacia arriba o abajo
		if (currentlyPressedKeys[83]){
			posicionVisionY = -0.02;
		} else {posicionVisionY = 0.02;}
	} else {posicionVisionY = 0;}
	
	if (currentlyPressedKeys[81] || currentlyPressedKeys[69]) {
		//Alejarse o acercarse
		if (currentlyPressedKeys[81]) {
			posicionVisionZ = -0.02;
		} else {posicionVisionZ = 0.02;}	
	} else {posicionVisionZ = 0;}
}
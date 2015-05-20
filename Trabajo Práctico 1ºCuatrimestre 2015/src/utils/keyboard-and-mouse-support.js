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
var normalizedCamera= vec3.create();
	if (currentlyPressedKeys[65] || currentlyPressedKeys[68]) {
	//Mover a izquierda o derecha
		if (currentlyPressedKeys[65]){
			phiAngle += degToRad(1);			
		}
		if (currentlyPressedKeys[68]) {
			phiAngle -= degToRad(1);	
		}	
	vec3.set(normalizedCamera,Math.cos(phiAngle),Math.sin(phiAngle),0);	//TODO acá está mal el cero en z, en z debería ir la posición que tiene en Z actualmente
	vec3.normalize(normalizedCamera,normalizedCamera);
	vec3.scale(cameraPosition,normalizedCamera,vec3.len(cameraPosition));
	} 
	
	if (currentlyPressedKeys[83] || currentlyPressedKeys[87]) {
		//Mover hacia arriba o abajo
		if (currentlyPressedKeys[83]){
			vec3.add(cameraPosition,cameraPosition,[0.0,0.1,0.0]);
		} else {vec3.add(cameraPosition,cameraPosition,[0.0,-0.1,0.0]);}
	}// else {posicionVisionY = 0;}
	
	if (currentlyPressedKeys[81] || currentlyPressedKeys[69]) {
		//la letra Q o E
		if (currentlyPressedKeys[81] && vec3.length(cameraPosition) > 1) {	//limito el máximo acercamiento
			vec3.scale(cameraPosition,cameraPosition,0.98);
		}
		if (currentlyPressedKeys[69] && vec3.length(cameraPosition) < 10) {	//limito el máximo alejamiento
			vec3.scale(cameraPosition,cameraPosition,1.02);
		}	
	}// else {posicionVisionZ = 0;}
}
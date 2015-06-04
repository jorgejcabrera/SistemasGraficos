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
	if ( (currentlyPressedKeys[65] || currentlyPressedKeys[68]) //TODO METER ACA QUE ES LA CAMARA DOS Y SE MUEVE EL PJ) {
	//Mover a izquierda o derecha
		if (currentlyPressedKeys[65]){
			phiAngle += degToRad(1);			
		}
		if (currentlyPressedKeys[68]) {
			phiAngle -= degToRad(1);			
		}	
	vec3.set(normalizedCamera,Math.cos(phiAngle)*Math.sin(thetaAngle),Math.sin(phiAngle)*Math.sin(thetaAngle),Math.cos(thetaAngle));
	vec3.normalize(normalizedCamera,normalizedCamera);
	vec3.scale(cameraPosition,normalizedCamera,vec3.len(cameraPosition));
	}
	
	if (currentlyPressedKeys[83] || currentlyPressedKeys[87]) {
		var normalizedCamera= vec3.create();
		//Mover hacia arriba o abajo
		if (currentlyPressedKeys[83] && thetaAngle >= degToRad(1)){
			thetaAngle -= degToRad(1);
		}
		if (currentlyPressedKeys[87] && thetaAngle <= degToRad(150)) {
			thetaAngle += degToRad(1);
		}
		vec3.set(normalizedCamera,Math.cos(phiAngle)*Math.sin(thetaAngle),Math.sin(phiAngle)*Math.sin(thetaAngle),Math.cos(thetaAngle));
		vec3.normalize(normalizedCamera,normalizedCamera);
		vec3.scale(cameraPosition,normalizedCamera,vec3.len(cameraPosition));
	}
	
	if (currentlyPressedKeys[81] || currentlyPressedKeys[69]) {
		//la letra Q o E
		if (currentlyPressedKeys[81] && vec3.length(cameraPosition) > 1) {	//limito el máximo acercamiento
			vec3.scale(cameraPosition,cameraPosition,0.98);
		}
		if (currentlyPressedKeys[69] && vec3.length(cameraPosition) < 10) {	//limito el máximo alejamiento
			vec3.scale(cameraPosition,cameraPosition,1.02);
		}	
	}
	
	//Si presiono el boton 1, vuelvo a la camara orbital
	if (currentlyPressedKeys[49] && cameraMode != 1) {
		cameraMode = 1;
		target = [0,0,0];
		var initPosToTranslate = vec3.create();
		vec3.set(initPosToTranslate,2.0,2.0,3.0);	//Aca pongo a donde quiero que vaya
		var radius = vec3.squaredLength(initPosToTranslate);
		thetaAngle = Math.acos(initPosToTranslate[2]/radius);	//para las rotaciones en zy e zx
		phiAngle = Math.atan(initPosToTranslate[1]/initPosToTranslate[0]);	//para las rotaciones en el plano xy
		cameraPosition = [radius*Math.cos(phiAngle)*Math.sin(thetaAngle),radius*Math.sin(phiAngle)*Math.sin(thetaAngle),radius*Math.cos(thetaAngle)];
	}
	
	//si presiono el boton 2, me cambio a otra cámara
	if (currentlyPressedKeys[50] && cameraMode != 2) {
		cameraMode = 2;
		cameraPosition = [5,3,0];
		vec3.normalize(cameraPosition,cameraPosition);
	//vec3.set(normalizedCamera,Math.cos(phiAngle)*Math.sin(thetaAngle),Math.sin(phiAngle)*Math.sin(thetaAngle),Math.cos(thetaAngle));
	//vec3.normalize(normalizedCamera,normalizedCamera);
	//vec3.scale(cameraPosition,normalizedCamera,vec3.len(cameraPosition));
	}
}

//Testeo la ruedita del mouse
//Ayuda de http://www.sitepoint.com/html5-javascript-mouse-wheel/
function MouseWheelHandler(e) {
	var e = window.event || e; // old IE support
	e = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	if ( e <= 0 && vec3.length(cameraPosition) < 20){
		vec3.scale(cameraPosition,cameraPosition,1.1)
	}
	if(e > 0 && vec3.length(cameraPosition) > 2){
			vec3.scale(cameraPosition,cameraPosition,0.9);
	}
}

var clicking = 0;
function onMouseUp(event){
	clicking = 0;
}
var clickX;
var clickY;
function onMouseDown(event){
	clicking = 1;
	clickX = event.clientX;
	clickY = event.clientY;
}

var normalizedCamera= vec3.create();
function onMouseMove(event) {
	if (clicking){		
		var x;
		var y;
		var testX;
		var testY;
		var testLimit = thetaAngle;
		if(event.clientX) {
			x = event.clientX;
			y = event.clientY;
		} else if(event.pageX) {
			x = event.pageX+window.pageXOffset-event.target.offsetLeft;
			y = event.pageY+window.pageYOffset-event.target.offsetTop;
		}
		testX = -(x - clickX)*128;
		testY = (y - clickY)*64;
		phiAngle += degToRad(testX)/widthOfCanvas;
		testLimit += degToRad(-testY)/heightOfCanvas;
		if (testLimit >= degToRad(1) && testLimit <= degToRad(150)){
			thetaAngle = testLimit;
		}
		clickX = x;
		clickY = y;
		
		if (cameraMode == 1){
			vec3.set(normalizedCamera,Math.cos(phiAngle)*Math.sin(thetaAngle),Math.sin(phiAngle)*Math.sin(thetaAngle),Math.cos(thetaAngle));
			vec3.normalize(normalizedCamera,normalizedCamera);
			vec3.scale(cameraPosition,normalizedCamera,vec3.len(cameraPosition));
		}
		if(cameraMode == 2){
			vec3.set(normalizedCamera,-Math.cos(phiAngle)*Math.sin(thetaAngle),Math.sin(phiAngle)*Math.sin(thetaAngle),Math.cos(thetaAngle));
			vec3.normalize(normalizedCamera,normalizedCamera);
			vec3.scale(target,normalizedCamera,100);
		}
	}
}
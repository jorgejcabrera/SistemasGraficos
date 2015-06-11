var currentlyPressedKeys = {};

//se llaman solo una vez y cuando se presiona una tecla
function handleKeyDown(event) {
	currentlyPressedKeys[event.keyCode] = true;
}

function handleKeyUp(event) {
    currentlyPressedKeys[event.keyCode] = false;
	if (!currentlyPressedKeys[81] || !currentlyPressedKeys[69]){
		spinning = false;
	}
}
  
//Al estar adentro del tick, se llamaria siempre
//Los codigos de las teclas fueron sacados de esta página http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
function handleKeyPresses(){	
	if ( (currentlyPressedKeys[65] || currentlyPressedKeys[68]) && cameraMode == 2){ //TODO METER ACA QUE ES LA CAMARA DOS Y SE MUEVE EL PJ) 
		//Me voy a mover como con W/S pero roto como 90 grados, o sea como que cambio de Y a X y de X a Y
		var normalizedCamera= vec3.create();
		vec3.multiply(normalizedCamera, target, [1,1,0]);	//Obtengo la dirección X-Y
		vec3.normalize(normalizedCamera,normalizedCamera);
		vec3.cross(normalizedCamera, normalizedCamera, [0,0,1]);	//Le hago esa rotación mágica de la que hable arriba 
		vec3.scale(normalizedCamera,normalizedCamera,0.3);	//Le modifico la velocidad
		//Teclas A o D
		if (currentlyPressedKeys[65]){
			vec3.sub(cameraPosition,cameraPosition, normalizedCamera);			
		}
		if (currentlyPressedKeys[68]) {
			vec3.add(cameraPosition,cameraPosition, normalizedCamera);			
		}
	}
	
	if ( (currentlyPressedKeys[83] || currentlyPressedKeys[87]) && cameraMode == 2) {
		var normalizedCamera= vec3.create();
		vec3.multiply(normalizedCamera, target, [1,1,0]);	//Obtengo la dirección X-Y
		vec3.normalize(normalizedCamera,normalizedCamera);
		vec3.scale(normalizedCamera,normalizedCamera,0.3);	//Le modifico la velocidad
		//Teclas W o S
		if (currentlyPressedKeys[83] && thetaAngle >= degToRad(1)){
			vec3.sub(cameraPosition,cameraPosition, normalizedCamera);
		}
		if (currentlyPressedKeys[87] && thetaAngle <= degToRad(150)) {
			vec3.add(cameraPosition,cameraPosition, normalizedCamera);
		}		
	}
	
	if (currentlyPressedKeys[81] || currentlyPressedKeys[69]) {
		//la letra Q o E
		if (currentlyPressedKeys[81]) {	//limito el máximo acercamiento
			moveXCrane += 0.08;
			spinning = true;
		}
		if (currentlyPressedKeys[69]) {	//limito el máximo alejamiento
			moveXCrane -= 0.08;
			spinning = true;
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
		vec3.set(cameraPosition,Math.cos(phiAngle)*Math.sin(thetaAngle),Math.sin(phiAngle)*Math.sin(thetaAngle),-Math.cos(thetaAngle));
		vec3.normalize(cameraPosition,cameraPosition);
		vec3.scale(target,cameraPosition,100);
		cameraPosition = [-20,-20,0];		
		vec3.normalize(cameraPosition,cameraPosition);	
	}
	//Si presiono Z=90 o X=88, para mover las pinzas de la grua
	if (currentlyPressedKeys[88] || currentlyPressedKeys[90]) {
		if(currentlyPressedKeys[88] && scaleDeLasPinzas > 0.3){
			scaleDeLasPinzas -= 0.01;
		}
		if(currentlyPressedKeys[90] && scaleDeLasPinzas < 1.2){
			scaleDeLasPinzas += 0.01;
		}
	}
	
	//Si presiono C=67 o V=86, para mover la cabina
	if (currentlyPressedKeys[67] || currentlyPressedKeys[86]) {
		if(currentlyPressedKeys[67] && moverCabina > -2){
			moverCabina -= 0.01;
		}
		if(currentlyPressedKeys[86] && moverCabina < 2){
			moverCabina += 0.01;
		}
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
var clickX=0;
var clickY=0;
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
		if (testLimit >= degToRad(25) && testLimit <= degToRad(100)){
			thetaAngle = testLimit;
		}
		clickX = x;
		clickY = y;
		if(cameraMode == 1){
			vec3.set(normalizedCamera,Math.cos(phiAngle)*Math.sin(thetaAngle),Math.sin(phiAngle)*Math.sin(thetaAngle),Math.cos(thetaAngle));
			vec3.normalize(normalizedCamera,normalizedCamera);
			vec3.scale(cameraPosition,normalizedCamera,vec3.len(cameraPosition));			
		}
		
		if (cameraMode == 2){
			vec3.set(normalizedCamera,Math.cos(phiAngle)*Math.sin(thetaAngle),Math.sin(phiAngle)*Math.sin(thetaAngle),-Math.cos(thetaAngle));
			vec3.normalize(normalizedCamera,normalizedCamera);
			vec3.scale(target,normalizedCamera,100);
		}
	}
}
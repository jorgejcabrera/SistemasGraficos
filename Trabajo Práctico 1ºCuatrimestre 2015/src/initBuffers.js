function initObjects() {
	mountain = new mountain(12,0.5,5,15);
	sphereSky = new TexturedSphere(24, 24,false);
	sphereLamp = new TexturedSphere(24, 24,true);
	cilindro = new cylinder(36,1);	
	ship = new Ship(12,0.1,4);	
	garras = new pinza();	
	cubo = new cube();
	quad = new square();
	containerYellow = new Container();
	containerRed = new Container();	
	containerBlue = new Container();
	containerGreen = new Container();
	containerGray = new Container();
	floor = new Floor(ship.getVertexFloor());
	bottomShip = new Floor(ship.getVertexTop());
	bufferContainers = new Array();

	bufferContainers.push(containerYellow);
	bufferContainers.push(containerRed);
	bufferContainers.push(containerBlue);
	bufferContainers.push(containerGreen);
	bufferContainers.push(containerGray);
}

var craneTexture;
var nullTexture;
var skyTexture;
var wheelTexture;
var floorTexture;
var waterTexture;
var mountainTexture;
var pinzaTexture;
function initTexture() {	
	skyTexture = gl.createTexture();
	skyTexture.image = new Image();
	skyTexture.image.onload = function() {		
		handleLoadedTexture(skyTexture);
	}
	skyTexture.image.src = "src/textures/sky.jpg";
	
	skyTexture.N = gl.createTexture();
	skyTexture.N.image = new Image();
	skyTexture.N.image.onload = function() {		
		handleLoadedTexture(skyTexture.N);
	}
	skyTexture.N.image.src = "src/textures/skyN.png";	

	floorShipTexture = gl.createTexture();
	floorShipTexture.image = new Image();
	floorShipTexture.image.onload = function() {
		handleLoadedTextureMosaic(floorShipTexture);
	}
	floorShipTexture.image.src = "src/textures/craneTexture3.jpg";

	floorShipTexture.N = gl.createTexture();
	floorShipTexture.N.image = new Image();
	floorShipTexture.N.image.onload = function() {
		handleLoadedTextureMosaic(floorShipTexture.N);
	}
	floorShipTexture.N.image.src = "src/textures/skyR.jpg";	
	
	craneTexture = gl.createTexture();
	craneTexture.image = new Image();
	craneTexture.image.onload = function() {		
		handleLoadedTextureMosaic(craneTexture);
	}
	craneTexture.image.src = "src/textures/crane.png";
	
	craneTexture.N = gl.createTexture();
	craneTexture.N.image = new Image();
	craneTexture.N.image.onload = function() {		
		handleLoadedTextureMosaic(craneTexture.N);
	}
	craneTexture.N.image.src = "src/textures/craneN.png";
	
	craneRTexture = gl.createTexture();
	craneRTexture.image = new Image();
	craneRTexture.image.onload = function() {		
		handleLoadedTextureMosaic(craneRTexture);
	}
	craneRTexture.image.src = "src/textures/crane.png";	
	
	craneRTexture.N = gl.createTexture();
	craneRTexture.N.image = new Image();
	craneRTexture.N.image.onload = function() {		
		handleLoadedTextureMosaic(craneRTexture.N);
	}
	craneRTexture.N.image.src = "src/textures/skyR.jpg";
	
	wheelTexture = gl.createTexture();
	wheelTexture.image = new Image();
	wheelTexture.image.onload = function() {		
		handleLoadedTextureMosaic(wheelTexture);
	}
	wheelTexture.image.src = "src/textures/wheel2.jpg";
	
	wheelTexture.N = gl.createTexture();
	wheelTexture.N.image = new Image();
	wheelTexture.N.image.onload = function() {		
		handleLoadedTextureMosaic(wheelTexture.N);
	}
	wheelTexture.N.image.src = "src/textures/wheel2N.png";	
	
	floorTexture = gl.createTexture();
	floorTexture.image = new Image();
	floorTexture.image.onload = function() {		
		handleLoadedTexture(floorTexture);
	}
	floorTexture.image.src = "src/textures/floor2.jpg";

	floorTexture.N = gl.createTexture();
	floorTexture.N.image = new Image();
	floorTexture.N.image.onload = function() {		
		handleLoadedTexture(floorTexture.N);
	}
	floorTexture.N.image.src = "src/textures/floor2N.png";
	
	floorTexture2 = gl.createTexture();
	floorTexture2.image = new Image();
	floorTexture2.image.onload = function() {		
		handleLoadedTexture(floorTexture2);
	}
	floorTexture2.image.src = "src/textures/floor22.jpg";

	floorTexture2.N = gl.createTexture();
	floorTexture2.N.image = new Image();
	floorTexture2.N.image.onload = function() {		
		handleLoadedTexture(floorTexture2.N);
	}
	floorTexture2.N.image.src = "src/textures/floor2N.png";
	
	waterTexture = gl.createTexture();
	waterTexture.image = new Image();
	waterTexture.image.onload = function() {		
		handleLoadedTextureMosaic(waterTexture);
	}
	waterTexture.image.src = "src/textures/water6.jpg";
	
	waterTexture.N = gl.createTexture();
	waterTexture.N.image = new Image();
	waterTexture.N.image.onload = function() {		
		handleLoadedTextureMosaic(waterTexture.N);
	}
	waterTexture.N.image.src = "src/textures/water6N.png";	
	
	waterLTexture = gl.createTexture();
	waterLTexture.image = new Image();
	waterLTexture.image.onload = function() {		
		handleLoadedTextureMosaic(waterLTexture);
	}
	waterLTexture.image.src = "src/textures/waterL.jpg";
	
	waterLTexture.N = gl.createTexture();
	waterLTexture.N.image = new Image();
	waterLTexture.N.image.onload = function() {		
		handleLoadedTextureMosaic(waterLTexture.N);
	}
	waterLTexture.N.image.src = "src/textures/waterLN.png";	
	
	mountainTexture = gl.createTexture();
	mountainTexture.image = new Image();
	mountainTexture.image.onload = function() {		
		handleLoadedTexture(mountainTexture);
	}
	mountainTexture.image.src = "src/textures/rock4.jpg";
	
	mountainTexture.N = gl.createTexture();
	mountainTexture.N.image = new Image();
	mountainTexture.N.image.onload = function() {		
		handleLoadedTexture(mountainTexture.N);
	}
	mountainTexture.N.image.src = "src/textures/rock4N.png";	
	
	pinzaTexture = gl.createTexture();
	pinzaTexture.image = new Image();
	pinzaTexture.image.onload = function() {		
		handleLoadedTexture(pinzaTexture);
	}
	pinzaTexture.image.src = "src/textures/cord.jpg";

	pinzaTexture.N = gl.createTexture();
	pinzaTexture.N.image = new Image();
	pinzaTexture.N.image.onload = function() {		
		handleLoadedTexture(pinzaTexture.N);
	}
	pinzaTexture.N.image.src = "src/textures/cordN.png";
	
	shipTexture = gl.createTexture();
	shipTexture.image = new Image();
	shipTexture.image.onload = function() {		
		handleLoadedTextureMosaic(shipTexture);
	}
	shipTexture.image.src = "src/textures/Ship3.png";
	
	shipTexture.N = gl.createTexture();
	shipTexture.N.image = new Image();
	shipTexture.N.image.onload = function() {		
		handleLoadedTextureMosaic(shipTexture.N);
	}
	shipTexture.N.image.src = "src/textures/waterL.jpg";	
	
	bottomShipTexture = gl.createTexture();
	bottomShipTexture.image = new Image();
	bottomShipTexture.image.onload = function() {		
		handleLoadedTextureMosaic(bottomShipTexture);
	}
	bottomShipTexture.image.src = "src/textures/bottomOfShip.png";
	
	bottomShipTexture.N = gl.createTexture();
	bottomShipTexture.N.image = new Image();
	bottomShipTexture.N.image.onload = function() {		
		handleLoadedTextureMosaic(bottomShipTexture.N);
	}
	bottomShipTexture.N.image.src = "src/textures/bottomOfShipN.png";	
	
	whiteTexture = gl.createTexture();
	whiteTexture.image = new Image();
	whiteTexture.image.onload = function() {		
		handleLoadedTextureMosaic(whiteTexture);
	}
	whiteTexture.image.src = "src/textures/white.png";
	
	whiteTexture.N = gl.createTexture();
	whiteTexture.N.image = new Image();
	whiteTexture.N.image.onload = function() {		
		handleLoadedTextureMosaic(whiteTexture.N);
	}
	whiteTexture.N.image.src = "src/textures/skyR.jpg";	
}
  
function handleLoadedTexture(texture) {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
	//esta forma para evitar utilizar texturas que tengan dimensiones de dos a la algo
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); //gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);	
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); //Prevents s-coordinate wrapping (repeating).
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); //Prevents t-coordinate wrapping (repeating).
	gl.bindTexture(gl.TEXTURE_2D, null);
	texture.finished = true;
}

function handleLoadedTextureMosaic(texture) {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
	//esta forma para evitar utilizar texturas que tengan dimensiones de dos a la algo
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST); //gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.generateMipmap(gl.TEXTURE_2D);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT); //Prevents s-coordinate wrapping (repeating).
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT); //Prevents t-coordinate wrapping (repeating).
	gl.bindTexture(gl.TEXTURE_2D, null);
	texture.finished = true;
}
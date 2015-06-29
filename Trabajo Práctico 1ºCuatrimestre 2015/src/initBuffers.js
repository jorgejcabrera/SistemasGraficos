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
	
	nullTexture = gl.createTexture();
	nullTexture.image = new Image();
	nullTexture.image.onload = function() {
		handleLoadedTexture(nullTexture);
	}
	nullTexture.image.src = "src/textures/nullTexture.jpg";	

	topShipTexture = gl.createTexture();
	topShipTexture.image = new Image();
	topShipTexture.image.onload = function() {
		handleLoadedTexture(topShipTexture);
	}
	topShipTexture.image.src = "src/textures/craneTexture6.jpg";	

	floorShipTexture = gl.createTexture();
	floorShipTexture.image = new Image();
	floorShipTexture.image.onload = function() {
		handleLoadedTextureMosaic(floorShipTexture);
	}
	floorShipTexture.image.src = "src/textures/craneTexture3.jpg";	
	
	craneTexture = gl.createTexture();
	craneTexture.image = new Image();
	craneTexture.image.onload = function() {		
		handleLoadedTextureMosaic(craneTexture);
	}
	craneTexture.image.src = "src/textures/crane.png";
	
	wheelTexture = gl.createTexture();
	wheelTexture.image = new Image();
	wheelTexture.image.onload = function() {		
		handleLoadedTextureMosaic(wheelTexture);
	}
	wheelTexture.image.src = "src/textures/wheel2.jpg";	
	
	floorTexture = gl.createTexture();
	floorTexture.image = new Image();
	floorTexture.image.onload = function() {		
		handleLoadedTexture(floorTexture);
	}
	floorTexture.image.src = "src/textures/floor2.jpg";
	
	waterTexture = gl.createTexture();
	waterTexture.image = new Image();
	waterTexture.image.onload = function() {		
		handleLoadedTextureMosaic(waterTexture);
	}
	waterTexture.image.src = "src/textures/water6.jpg";
	
	waterLTexture = gl.createTexture();
	waterLTexture.image = new Image();
	waterLTexture.image.onload = function() {		
		handleLoadedTextureMosaic(waterLTexture);
	}
	waterLTexture.image.src = "src/textures/waterL.jpg";
	
	mountainTexture = gl.createTexture();
	mountainTexture.image = new Image();
	mountainTexture.image.onload = function() {		
		handleLoadedTexture(mountainTexture);
	}
	mountainTexture.image.src = "src/textures/rock4.jpg";
	
	pinzaTexture = gl.createTexture();
	pinzaTexture.image = new Image();
	pinzaTexture.image.onload = function() {		
		handleLoadedTexture(pinzaTexture);
	}
	pinzaTexture.image.src = "src/textures/cord.jpg";
	
	shipTexture = gl.createTexture();
	shipTexture.image = new Image();
	shipTexture.image.onload = function() {		
		handleLoadedTextureMosaic(shipTexture);
	}
	shipTexture.image.src = "src/textures/Ship3.png";
	
	bottomShipTexture = gl.createTexture();
	bottomShipTexture.image = new Image();
	bottomShipTexture.image.onload = function() {		
		handleLoadedTextureMosaic(bottomShipTexture);
	}
	bottomShipTexture.image.src = "src/textures/bottomOfShip.png";
	
	whiteTexture = gl.createTexture();
	whiteTexture.image = new Image();
	whiteTexture.image.onload = function() {		
		handleLoadedTextureMosaic(whiteTexture);
	}
	whiteTexture.image.src = "src/textures/white.png";	
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
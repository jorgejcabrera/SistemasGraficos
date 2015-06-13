function initObjects() {
	mountain = new grid(12,0.5,5,15);
	sky = new TexturedSphere(24, 24);
	cilindro = new cylinder(36,1);
	ship = new Ship(4,3,5,320);
	garras = new pinza();
	container = new Container();
}

var craneTexture;
var nullTexture;
function initTexture() {
	nullTexture = gl.createTexture();
	nullTexture.image = new Image();
	nullTexture.image.onload = function() {
		handleLoadedTexture(nullTexture);
	}
	nullTexture.image.src = "src/textures/nullTexture.jpg";	
	
	craneTexture = gl.createTexture();
	craneTexture.image = new Image();
	craneTexture.image.onload = function() {		
		handleLoadedTexture(craneTexture);
	}
	craneTexture.image.src = "src/textures/craneTexture4.jpg";
	
	skyTexture = gl.createTexture();
	skyTexture.image = new Image();
	skyTexture.image.onload = function() {		
		handleLoadedTexture(skyTexture);
	}
	skyTexture.image.src = "src/textures/url.jpg";
	
	wheelTexture = gl.createTexture();
	wheelTexture.image = new Image();
	wheelTexture.image.onload = function() {		
		handleLoadedTexture(wheelTexture);
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
		handleLoadedTexture(waterTexture);
	}
	waterTexture.image.src = "src/textures/water.png";
	
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
}
  
function handleLoadedTexture(texture) {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
	//esta forma para evitar utilizar texturas que tengan dimensiones de dos a la algo
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); //gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); //Prevents s-coordinate wrapping (repeating).
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); //Prevents t-coordinate wrapping (repeating).
	gl.bindTexture(gl.TEXTURE_2D, null);
}
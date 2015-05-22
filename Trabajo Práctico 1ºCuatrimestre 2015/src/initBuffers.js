function initBuffers() {	
	triangle();
	square();
	pyramid();	
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

	craneTexture.image.src = "src/textures/craneTexture1.jpg";
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
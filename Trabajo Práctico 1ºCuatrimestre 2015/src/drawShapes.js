function drawTriangle (where,scalator,degreesToRotate) {
	//por ahora hardcodeada la textura
	drawShaper3D(where,scalator,triangleVertexPositionBuffer,false,nullTexture,degreesToRotate);
	gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer.numItems);
}

function drawSquare (where,scalator,degreesToRotate) {
	//por ahora hardcodeada la textura
	drawShaper3D(where,scalator,squareVertexPositionBuffer,true,nullTexture,degreesToRotate);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVertexPositionBuffer.numItems);
}

function drawCube (where,scalator,degreesToRotate) {
	//por ahora hardcodeada la textura
	drawShaper3D(where,scalator,cubeVertexPositionBuffer,false,craneTexture,cubeVertexTextureCoordBuffer,degreesToRotate);
	gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function drawPyramid(where,scalator,degreesToRotate){
	//por ahora hardcodeada la textura
	drawShaper3D(where,scalator,pyramidVertexPositionBuffer,false,nullTexture,degreesToRotate);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, pyramidVertexPositionBuffer.numItems);
}

function drawCylinder(where, scalator,degreesToRotate){
	cylinder(15,1);
	drawShaper3D(where,scalator,cylinderVertexPositionBuffer,true,craneTexture,cylinderVertexTextureCoordBuffer,degreesToRotate);
	gl.drawElements(gl.TRIANGLES, cylinderVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}

/*La funcion se encarga de dibujar el objeto segun el buffer que se le pase, la posicion y la escala*/
//TODO: CAMBIAR cubeVertexTextureCoordBuffer que no va en el shaper 3d, pasar el vertexTextureCoorBuffer por parametro
function drawShaper3D(where,scalator,vertexBuffer,animation,texture,vertexTextureBuffer,degreesToRotate){
	//Math.cos(degToRad(ticker))*
	mat4.lookAt(vMatrix,cameraPosition,[0.0,0.0,0.0],[0.0,0.0,1.0]);
	
	mat4.identity(mMatrix);
	mat4.translate(mMatrix,mMatrix, where);
	mat4.rotate(mMatrix, mMatrix, degreesToRotate, [1, 0, 0]);

	if (animation == true){
		mat4.rotate(mMatrix, mMatrix, degToRad(ticker), [1, 1, 1]);
	}
	mat4.scale(mMatrix, mMatrix,scalator);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureBuffer.itemSize, gl.FLOAT, false, 0, 0);
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);	
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
}

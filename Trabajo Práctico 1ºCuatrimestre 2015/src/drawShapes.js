function drawTriangle (where,scalator) {
	//por ahora hardcodeada la textura
	drawShaper3D(where,scalator,triangleVertexPositionBuffer,false,nullTexture);
	gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer.numItems);
}

function drawSquare (where,scalator) {
	//por ahora hardcodeada la textura
	drawShaper3D(where,scalator,squareVertexPositionBuffer,true,nullTexture);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVertexPositionBuffer.numItems);
}

function drawCube (where,scalator) {
	//por ahora hardcodeada la textura
	drawShaper3D(where,scalator,cubeVertexPositionBuffer,true,craneTexture);
	gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function drawPyramid(where,scalator){
	//por ahora hardcodeada la textura
	drawShaper3D(where,scalator,pyramidVertexPositionBuffer,false,nullTexture);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, pyramidVertexPositionBuffer.numItems);
}

/*La funcion se encarga de dibujar el objeto segun el buffer que se le pase, la posicion y la escala*/
function drawShaper3D(where,scalator,buffer,animation,texture){
	mat4.identity(mvMatrix);
	mat4.translate(mvMatrix, where);
	if (animation == true){
		mat4.rotate(mvMatrix, degToRad(ticker), [1, 1, 1]);
	}
	mat4.scale(mvMatrix,scalator);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);
	
	
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, buffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
}

function drawTriangle (where,scalator) {	
	drawShaper3D(where,scalator,triangleVertexPositionBuffer,false)
	gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer.numItems);
}

function drawSquare (where,scalator) {
	drawShaper3D(where,scalator,squareVertexPositionBuffer,true)
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVertexPositionBuffer.numItems);
}

function drawCube (where,scalator) {
	drawShaper3D(where,scalator,cubeVertexPositionBuffer,true)
	gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function drawPyramid(where,scalator){
	drawShaper3D(where,scalator,pyramidVertexPositionBuffer,false)
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, pyramidVertexPositionBuffer.numItems);
}

/*La funcion se encarga de dibujar el objeto segun el buffer que se le pase, la posicion y la escala*/
function drawShaper3D(where,scalator,buffer,animation){
	mat4.identity(mvMatrix);
	mat4.translate(mvMatrix, where);
	if (animation == true){
		mat4.rotate(mvMatrix, degToRad(ticker), [1, 1, 1]);
	}
	mat4.scale(mvMatrix,scalator);
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, buffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
}

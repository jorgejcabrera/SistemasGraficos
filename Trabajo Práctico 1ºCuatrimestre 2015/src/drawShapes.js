function drawTriangle (where) {	
	mat4.identity(mvMatrix);

	mat4.translate(mvMatrix, where);
	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, triangleVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer.numItems);
}

function drawSquare (where,scalator) {
	mat4.identity(mvMatrix);
	

	mat4.translate(mvMatrix, where);
	mat4.rotate(mvMatrix, degToRad(ticker), [1, 1, 1]);
	mat4.scale(mvMatrix,scalator);
	gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVertexPositionBuffer.numItems);
}

function drawCube (where,scalator) {
	mat4.identity(mvMatrix);
	
	//notar que el orden es importante, para OpenGL y WebGL el orden es TRASLADAR, ROTAR luego PROPORCIONAR
	mat4.translate(mvMatrix, where);	
	mat4.rotate(mvMatrix, degToRad(ticker), [0, 1, 0]);
	mat4.scale(mvMatrix,scalator);
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
	setMatrixUniforms();
	gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}
function drawTriangle (where) {	
	mat4.identity(mvMatrix);

	mat4.translate(mvMatrix, where);
	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, triangleVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer.numItems);
}

function drawSquare (where) {
	mat4.identity(mvMatrix);

	mat4.translate(mvMatrix, where);
	gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVertexPositionBuffer.numItems);
}

function drawCube (where) {
	mat4.identity(mvMatrix);
	scalator = [1.0, 2.0, 1.0];
	
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

function drawCube2 (where) {
	mat4.identity(mvMatrix);	

	//primera cara	
	mat4.translate(mvMatrix, where);
	mat4.rotate(mvMatrix,degToRad(-45),[0, 1, 0]);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, cube2VertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cube2VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, cube2VertexPositionBuffer.numItems);	
	//segunda cara
	mat4.translate(mvMatrix, [1, 0, -1]);	
	mat4.rotate(mvMatrix,degToRad(90),[0, 1, 0]);
	gl.bindBuffer(gl.ARRAY_BUFFER, cube2VertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cube2VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, cube2VertexPositionBuffer.numItems);	
	//tercera cara	
	mat4.translate(mvMatrix, [-1, 0, -1]);
	mat4.rotate(mvMatrix,degToRad(90),[0, 1, 0]);
	gl.bindBuffer(gl.ARRAY_BUFFER, cube2VertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cube2VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, cube2VertexPositionBuffer.numItems);
	//cuarta cara
	mat4.translate(mvMatrix, [-1, 0, 1]);
	mat4.rotate(mvMatrix,degToRad(90),[0, 1, 0]);
	gl.bindBuffer(gl.ARRAY_BUFFER, cube2VertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cube2VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, cube2VertexPositionBuffer.numItems);
	//tapa arriba
	mat4.translate(mvMatrix, [1, 1, 0]);
	mat4.rotate(mvMatrix,degToRad(90),[1, 0, 0]);
	gl.bindBuffer(gl.ARRAY_BUFFER, cube2VertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cube2VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, cube2VertexPositionBuffer.numItems);
	//tapa abajo
	mat4.translate(mvMatrix, [0, 0, 2]);
	gl.bindBuffer(gl.ARRAY_BUFFER, cube2VertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cube2VertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, cube2VertexPositionBuffer.numItems);
}
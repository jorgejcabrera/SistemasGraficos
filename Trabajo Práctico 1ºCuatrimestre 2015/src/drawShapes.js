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
	drawShaper3D(where,scalator,cubeVertexPositionBuffer,false,craneTexture,cubeVertexTextureCoordBuffer);
	gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}
//Overload para que le pase los grados y el eje de rotacion
function drawCubeOverload (where,scalator,degreesToRotate,axisToRotate) {
	//por ahora hardcodeada la textura
	drawShaper3DOverload(where,scalator,cubeVertexPositionBuffer,false,craneTexture,cubeVertexTextureCoordBuffer,degreesToRotate,axisToRotate);
	gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function drawPyramid(where,scalator){
	//por ahora hardcodeada la textura
	drawShaper3D(where,scalator,pyramidVertexPositionBuffer,false,nullTexture);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, pyramidVertexPositionBuffer.numItems);
}

function drawCylinder(where, scalator,degreesToRotate,axisToRotate){
	cylinder(36,1);
	drawShaper3DOverload(where,scalator,cylinderVertexPositionBuffer,false,wheelTexture,cylinderVertexTextureCoordBuffer,degreesToRotate,axisToRotate);
	gl.drawElements(gl.TRIANGLES, cylinderVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function drawSky(where, scalator,degreesToRotate,axisToRotate){
	sky = new TexturedSphere(32, 32);
	sky.initBuffers();
	drawShaper3DOverload(where,scalator,sky.webgl_position_buffer,false,skyTexture,sky.webgl_texture_coord_buffer,degreesToRotate,axisToRotate);
	gl.drawElements(gl.TRIANGLES, sky.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
}

/*La funcion se encarga de dibujar el objeto segun el buffer que se le pase, la posicion y la escala*/
function drawShaper3D(where,scalator,vertexBuffer,animation,texture,vertexTextureBuffer){
	mat4.lookAt(vMatrix,cameraPosition,target,[0.0,0.0,1.0]);
	mat4.identity(mMatrix);
	mat4.translate(mMatrix,mMatrix, where);

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
//Overload que pide rotación y eje de rotación
function drawShaper3DOverload(where,scalator,vertexBuffer,animation,texture,vertexTextureBuffer,degreesToRotate,axisToRotate){
	mat4.lookAt(vMatrix,cameraPosition,target,[0.0,0.0,1.0]);
	mat4.identity(mMatrix);
	mat4.translate(mMatrix,mMatrix, where);
	mat4.rotate(mMatrix, mMatrix, degToRad(degreesToRotate), axisToRotate);	//axisToRotate = 1 0 0 90 grados

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

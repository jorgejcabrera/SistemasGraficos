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
	cilindro.initBuffers();
	drawShaper3DOverload(where,scalator,cilindro.webgl_position_buffer,spinning,wheelTexture,cilindro.webgl_texture_coord_buffer,degreesToRotate,axisToRotate);
	gl.drawElements(gl.TRIANGLES, cilindro.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function drawSky(where, scalator,degreesToRotate,axisToRotate){
	sky.initBuffers();
	drawShaper3DOverload(where,scalator,sky.webgl_position_buffer,false,skyTexture,sky.webgl_texture_coord_buffer,degreesToRotate,axisToRotate);
	gl.drawElements(gl.TRIANGLES, sky.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function drawQUAD(where,scalator,degreesToRotate,axisToRotate,texture){
	quad = new square();
	drawShaper3DOverload(where,scalator,quad.webgl_position_buffer,false,texture,quad.webgl_texture_coord_buffer,degreesToRotate,axisToRotate);
	gl.drawElements(gl.TRIANGLES, quad.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function drawFloor(where,scalator){
	cube();	
	drawShaper3D(where,scalator,cubeVertexPositionBuffer,false,floorTexture,cubeVertexTextureCoordBuffer);
	gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function drawPinza(where,scalator){
	garras.initBuffers();
	drawShaper3D(where,scalator,garras.webgl_position_buffer,false,pinzaTexture,garras.webgl_texture_coord_buffer);
	gl.drawElements(gl.TRIANGLES, garras.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function drawMountain(where,scalator,degreesToRotate,axisToRotate){
	mountain.initBuffers();
	drawShaper3DOverload(where,scalator,mountain.webgl_position_buffer,false,mountainTexture,mountain.webgl_texture_coord_buffer,degreesToRotate,axisToRotate);
	gl.drawElements(gl.TRIANGLES, mountain.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function drawContainer(where,scalator){
	container.setPosition(where);
	container.initBuffers();
	drawShaper3D(where,scalator,container.webgl_position_buffer,false,pinzaTexture,container.webgl_texture_coord_buffer);
	gl.drawElements(gl.TRIANGLES, container.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function drawShip(where,scalator){
	ship.initBuffers();
	drawShaper3D(where,scalator,ship.webgl_position_buffer,false,pinzaTexture,ship.webgl_texture_coord_buffer);
	gl.drawElements(gl.TRIANGLES, ship.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
}
/*La funcion se encarga de dibujar el objeto segun el buffer que se le pase, la posicion y la escala*/
function drawShaper3D(where,scalator,vertexBuffer,animation,texture,vertexTextureBuffer){	
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
	mat4.identity(mMatrix);
	mat4.translate(mMatrix,mMatrix, where);
	mat4.rotate(mMatrix, mMatrix, degToRad(degreesToRotate), axisToRotate);	//axisToRotate = 1 0 0 90 grados

	if (animation == true){
		mat4.rotate(mMatrix, mMatrix, degToRad(ticker), [0, 0, 1]);
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

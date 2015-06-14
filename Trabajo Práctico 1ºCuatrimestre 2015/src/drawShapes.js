function drawSky(where, scalator,degreesToRotate,axisToRotate){
	sky.initBuffers();
	sky.drawOverload(where, scalator,degreesToRotate,axisToRotate,skyTexture);
}

function drawOcean(where,scalator,texture){
	quad.initBuffers();
	quad.draw(where,scalator,texture);
}

function drawMountain(where,scalator,degreesToRotate,axisToRotate){
	mountain.initBuffers();
	mountain.drawOverload(where,scalator,degreesToRotate,axisToRotate,mountainTexture);
}

function drawContainer(where,scalator){
	container.setPosition(where);
	container.initBuffers();
	container.draw(where,scalator,pinzaTexture);
}

function drawShip(where,scalator){
	ship.initBuffers();
	drawShaper3D(where,scalator,ship.webgl_position_buffer,false,pinzaTexture,ship.webgl_texture_coord_buffer);
	gl.drawElements(gl.TRIANGLES, ship.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
}

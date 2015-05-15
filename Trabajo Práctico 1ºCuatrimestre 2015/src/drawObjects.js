
//la posY indica la posicion de donde se empieza a dibujar el muro
function drawWallCrane(posX,posY,posZ){
	drawCube([posX, posY, posZ],[0.15, 0.3, 0.2]);
	drawCube([posX, posY+0.6*1, posZ],[0.15, 0.3, 0.2]);
	drawCube([posX, posY+0.6*2, posZ],[0.15, 0.3, 0.2]);
	drawCube([posX, posY+0.6*3, posZ],[0.15, 0.3, 0.2]);
	drawCube([posX, posY+0.6*4, posZ],[0.15, 0.3, 0.2]);
	
	drawCube([-posX, posY, posZ],[0.15, 0.3, 0.2]);
	drawCube([-posX, posY+0.6*1, posZ],[0.15, 0.3, 0.2]);
	drawCube([-posX, posY+0.6*2, posZ],[0.15, 0.3, 0.2]);
	drawCube([-posX, posY+0.6*3, posZ],[0.15, 0.3, 0.2]);
	drawCube([-posX, posY+0.6*4, posZ],[0.15, 0.3, 0.2]);
}


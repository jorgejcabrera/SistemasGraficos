
//la posY indica la posicion de donde se empieza a dibujar el muro
function drawWallCrane(posX,posY,posZ){
	var height = 0.3;
	drawCube([posX, posY, posZ],[0.1, height, 0.1]);
	drawCube([posX, posY+height*2, posZ],[0.1, height, 0.1]);
	drawCube([posX, posY+height*4, posZ],[0.1, height, 0.1]);
	drawCube([posX, posY+height*6, posZ],[0.1, height, 0.1]);
	drawCube([posX, posY+height*8, posZ],[0.1, height, 0.1]);
	
	drawCube([0, posY * 22, posZ],[height*3, 0.1, 0.1]);
	//drawCube([0, posY * 22, posZ],[height*3, 0.1, 0.1]);

	drawCube([-posX, posY, posZ],[0.1, height, 0.1]);
	drawCube([-posX, posY+height*2, posZ],[0.1, height, 0.1]);
	drawCube([-posX, posY+height*4, posZ],[0.1, height, 0.1]);
	drawCube([-posX, posY+height*6, posZ],[0.1, height, 0.1]);
	drawCube([-posX, posY+height*8, posZ],[0.1, height, 0.1]);

	drawCube([0, -0.1, posZ],[height*3, 0.1, 0.1]);
}


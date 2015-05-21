
//la posY indica la posicion de donde se empieza a dibujar el muro
function drawWallCrane(posX,posY,posZ){
	var height = 4.0;
	var width = 0.1;
	var longitude = 0.2;
	var scale = [longitude,width,height];
	drawCube([posX,posY,posZ],scale);
	drawCube([posX, posY+height, posZ],scale);
	drawCube([posX, posY + longitude * 10, posZ - longitude * 4],[longitude,(height-longitude)/2,width]);
	drawCube([posX, posY + longitude * 10, height + posZ - width],[longitude,(height-longitude)/2,width]);
}


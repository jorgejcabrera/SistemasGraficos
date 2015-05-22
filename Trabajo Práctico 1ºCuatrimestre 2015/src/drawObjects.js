
//la posY indica la posicion de donde se empieza a dibujar el muro
function drawWallCrane(posX,posY,posZ){
	var height = 4.0;
	var width = 0.1;
	var longitude = 0.2;
	var longitudeHypotenuse = calculateHypotenuse(height - posZ + longitude * 1.50 - longitude * 7, (height-longitude)/2 + width);
	var scale = [longitude,width,height];
	//columna 1
	drawCube([posX,posY,posZ],scale,0);
	//columna 2
	drawCube([posX, posY+height, posZ],scale,0);
	//barra lateral baja
	drawCube([posX, posY + longitude * 10, posZ - longitude * 1.50],[longitude,(height-longitude)/2,width],0);
	//barra lateral alta
	drawCube([posX, posY + longitude * 10, height + posZ - width],[longitude,(height-longitude)/2,width],0);
	//barra diagonal			esta todo muy hardcodeado hay que optimizar
	drawCube([posX, posY+longitude*10, height-longitude*6],[longitude*0.5,longitudeHypotenuse,width],Math.PI/4);
}

function calculateHypotenuse(upperLeg,lowerLeg){
	return Math.sqrt(upperLeg * upperLeg + lowerLeg * lowerLeg);
}
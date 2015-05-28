
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
	drawCube([posX, posY + height, posZ],scale,0);
	//barra lateral baja
	drawCube([posX, posY + longitude * 10, posZ - longitude * 1.50],[longitude,(height-longitude)/2,width],0);
	//barra lateral alta
	drawCube([posX, posY + longitude * 10, height + posZ - width],[longitude,(height-longitude)/2,width],0);
	//barra diagonal			esta todo muy hardcodeado hay que optimizar
	drawCube([posX, posY+longitude*10, height-longitude*6],[longitude*0.5,longitudeHypotenuse,width],Math.PI/4);
}

//PRE: POSX TIENE QUE SER DISTINTO DE CERO
function drawCrame(posX,posY,posZ){
	var height = 4.0;
	var width = 0.10;
	var longitude = 0.20;
	cube();
	var distanceBeetwenWalls=4;
	//PAREDES LATERALES
	drawWallCrane(posX,posY,posZ);
    drawWallCrane( posX+distanceBeetwenWalls,posY,posZ);

    //BARRAS HORIZONTALES
    drawCube([ posX+distanceBeetwenWalls*0.5, posY+longitude*4, height+posZ-width ],[distanceBeetwenWalls-height/2-longitude , width*2,width],0);
    drawCube([ posX+distanceBeetwenWalls*0.5, posY+height-longitude*4 , height+posZ-width ],[distanceBeetwenWalls-height/2-longitude ,width*2,width],0);

    //SOPORTE
    drawCube([posX+distanceBeetwenWalls*0.5+(posX+distanceBeetwenWalls*0.5)/5 , posY - longitude * 6 , height + posZ - width],[longitude,distanceBeetwenWalls * 1.5,width*1.5],0);
    drawCube([posX+distanceBeetwenWalls*0.5-(posX+distanceBeetwenWalls*0.5)/5 , posY - longitude * 6 , height + posZ - width],[longitude,distanceBeetwenWalls * 1.5,width*1.5],0);

    //UNION ENTRE AMBOS SOPORTES
    drawCube([posX+distanceBeetwenWalls*0.5, posY-longitude*6-distanceBeetwenWalls*1.5- width, height + posZ - width ],[ (posX + distanceBeetwenWalls * 0.5) * 1/5 + width * 2,  width, width * 1.5],0);

    //CONTRAPESO
    drawCube([posX+distanceBeetwenWalls*0.5, posY-longitude*6+distanceBeetwenWalls*1.5, height + posZ - width ],[ (posX + distanceBeetwenWalls * 0.5) * 1/5 + width * 3, distanceBeetwenWalls * 0.15, distanceBeetwenWalls * 0.15],0);

    //CABINA
    drawCabin(posX, posY, height, posZ );

}

function drawCabin(posX,posY,posZ,height){
	var distanceBeetwenWalls = 4;
	var longitude = 0.20;
	var width = 0.05;
	var posXRearWall = posX+distanceBeetwenWalls*0.5;
	var longitudeRearWall = (posX+distanceBeetwenWalls*0.5)*1/5+width*3;
	var posYRearWall = posY-longitude*6-distanceBeetwenWalls*1.5-width+longitudeRearWall*0.75*6;

	//PARED TRASERA
	drawCube([posXRearWall, posYRearWall, posZ],[longitudeRearWall,width, height-width],0);

	//PISO
	drawCube([posXRearWall, posYRearWall-(longitudeRearWall)*0.75-width, posZ-height+width*2],[longitudeRearWall,longitudeRearWall*0.75, width],0);

	//TECHO
	drawCube([posXRearWall, posYRearWall-(longitudeRearWall)*0.75-width, posZ+height-width*2],[longitudeRearWall,longitudeRearWall*0.75, width],0);
	drawCube([posXRearWall+longitudeRearWall-width, posYRearWall-(longitudeRearWall)*0.75-width, posZ+height-width*3-width*4*0.5-width*2],[width,longitudeRearWall*0.75, width*4],0);
	drawCube([posXRearWall-longitudeRearWall+width, posYRearWall-(longitudeRearWall)*0.75-width, posZ+height-width*3-width*4*0.5-width*2],[width,longitudeRearWall*0.75, width*4],0);
	drawCube([posXRearWall, posYRearWall-(longitudeRearWall)*0.75-width-longitudeRearWall*0.75+width, posZ+height-width*3-width*4*0.5-width*2],[longitudeRearWall-width*2,width, width*4],0);


}


function calculateHypotenuse(upperLeg,lowerLeg){
	return Math.sqrt(upperLeg * upperLeg + lowerLeg * lowerLeg);
}
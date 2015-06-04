
//la posY indica la posicion de donde se empieza a dibujar el muro
function drawWallCrane(posX,posY,posZ){
	var height = 4.0;
	var width = 0.1;
	var longitude = 0.2;
	var longitudeHypotenuse = calculateHypotenuse(height - posZ + longitude * 1.50 - longitude * 7, (height-longitude)/2 + width);
	var scale = [longitude,width,height];
	//columna 1
	drawCube([posX,posY,posZ],scale);	
	//columna 2
	drawCube([posX, posY + height, posZ],scale);
	//barra lateral baja
	drawCube([posX, posY + longitude * 10, posZ - longitude * 1.50],[longitude,(height-longitude)/2,width]);
	//barra lateral alta
	drawCube([posX, posY + longitude * 10, height + posZ - width],[longitude,(height-longitude)/2,width]);
	//barra diagonal			esta todo muy hardcodeado hay que optimizar
	drawCubeOverload([posX, posY+longitude*10, height-longitude*6],[longitude*0.5,longitudeHypotenuse,width],45,[1,0,0]);
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
    drawWallCrane(posX+distanceBeetwenWalls,posY,posZ);

    //BARRAS HORIZONTALES
    drawCube([ posX+distanceBeetwenWalls*0.5, posY+longitude*4, height+posZ-width ],[distanceBeetwenWalls-height/2-longitude , width*2,width]);
    drawCube([ posX+distanceBeetwenWalls*0.5, posY+height-longitude*4 , height+posZ-width ],[distanceBeetwenWalls-height/2-longitude ,width*2,width]);

    //SOPORTE
    drawCube([posX+distanceBeetwenWalls*0.5+(posX+distanceBeetwenWalls*0.5)/5 , posY - longitude * 6 , height + posZ - width],[longitude,distanceBeetwenWalls * 1.5,width*1.5]);
   	drawCube([posX+distanceBeetwenWalls*0.5-(posX+distanceBeetwenWalls*0.5)/5 , posY - longitude * 6 , height + posZ - width],[longitude,distanceBeetwenWalls * 1.5,width*1.5]);

    //UNION ENTRE AMBOS SOPORTES
    drawCube([posX+distanceBeetwenWalls*0.5, posY-longitude*6-distanceBeetwenWalls*1.5- width, height + posZ - width ],[ (posX + distanceBeetwenWalls * 0.5) * 1/5 + width * 2,  width, width * 1.5]);

    //CONTRAPESO
    drawCube([posX+distanceBeetwenWalls*0.5, posY-longitude*6+distanceBeetwenWalls*1.5, height + posZ - width ],[ (posX + distanceBeetwenWalls * 0.5) * 1/5 + width * 3, distanceBeetwenWalls * 0.15, distanceBeetwenWalls * 0.15]);

    //CABINA
    drawCabin(posX, posY, height, posZ );
	
	//LAS RUEDAS
	drawWheels(posX,posY,posZ,distanceBeetwenWalls,height,width);
}

function drawWheels(posX,posY,posZ,distanceBeetwenWalls,distanciaRuedas,anchoGruaY){
	var scaleDown = 1.75;
	var radio = 1*scaleDown;
	var scaleX = 1/scaleDown;
	var scaleY = 1/scaleDown;
	var scaleZ = 0.1;	//ver que sea el ancho de la grua
	var wheelScale = [scaleX,scaleY,scaleZ];
	drawCylinder([posX,posY+anchoGruaY+scaleZ*4/2,-posZ-radio],wheelScale,90, [1,0,0]);
	drawCylinder([posX+distanceBeetwenWalls,posY+anchoGruaY+scaleZ*4/2,-posZ-radio],wheelScale,90, [1,0,0]);
	drawCylinder([posX,posY-anchoGruaY-scaleZ*4/2+distanciaRuedas,-posZ-radio],wheelScale,90, [1,0,0]);
	drawCylinder([posX+distanceBeetwenWalls,posY-anchoGruaY-scaleZ*4/2+distanciaRuedas,-posZ-radio],wheelScale,90, [1,0,0]);


}

function drawCabin(posX,posY,posZ,height){
	var distanceBeetwenWalls = 4;
	var longitude = 0.20;
	var width = 0.05;
	var posXRearWall = posX+distanceBeetwenWalls*0.5;
	var longitudeRearWall = (posX+distanceBeetwenWalls*0.5)*1/5+width*3;
	var posYRearWall = posY-longitude*6-distanceBeetwenWalls*1.5-width+longitudeRearWall*0.75*6;

	//PARED TRASERA
	drawCube([posXRearWall, posYRearWall, posZ],[longitudeRearWall,width, height-width]);

	//PISO
	drawCube([posXRearWall, posYRearWall-longitudeRearWall*0.75-width, posZ-height+width*2],[longitudeRearWall,longitudeRearWall*0.75, width]);
	drawCube([posXRearWall+longitudeRearWall-width, posYRearWall-longitudeRearWall*0.75-width,posZ-height+width*7],[width,longitudeRearWall*0.75, width*4]);
	drawCube([posXRearWall-longitudeRearWall+width, posYRearWall-longitudeRearWall*0.75-width,posZ-height+width*7],[width,longitudeRearWall*0.75, width*4]);
	drawCube([posXRearWall,posYRearWall-longitudeRearWall*0.75*2,posZ-height+width*7],[longitudeRearWall-width*2,width, width*4]);

	//TECHO
	drawCube([posXRearWall, posYRearWall-longitudeRearWall*0.75-width, posZ+height-width*2],[longitudeRearWall,longitudeRearWall*0.75, width]);
	drawCube([posXRearWall+longitudeRearWall-width, posYRearWall-longitudeRearWall*0.75-width, posZ+height-width*7],[width,longitudeRearWall*0.75, width*4]);
	drawCube([posXRearWall-longitudeRearWall+width, posYRearWall-longitudeRearWall*0.75-width, posZ+height-width*7],[width,longitudeRearWall*0.75, width*4]);
	drawCube([posXRearWall, posYRearWall-longitudeRearWall*0.75*2, posZ+height-width*7],[longitudeRearWall-width*2,width, width*4]);

	//LATERALES IZQUIERDOS
	drawCube([posXRearWall-longitudeRearWall+width,posYRearWall-width*4, posZ],[width,longitudeRearWall*0.75*0.25, height-11*width]);
	drawCube([posXRearWall-longitudeRearWall+width,posYRearWall-longitudeRearWall*0.75*2+longitudeRearWall*0.75*0.25-width,posZ],[width,longitudeRearWall*0.75*0.25, height-11*width]);

	//LATERALES DERECHOS	
	drawCube([posXRearWall+longitudeRearWall-width,posYRearWall-width*4,posZ],[width,longitudeRearWall*0.75*0.25, height-width-2*(width*5)]);
	drawCube([posXRearWall+longitudeRearWall-width,posYRearWall-longitudeRearWall*0.75*2+longitudeRearWall*0.75*0.25-width,posZ],[width,longitudeRearWall*0.75*0.25, height-11*width]);

	//PARTE FRONTAL
	drawCube([posXRearWall+longitudeRearWall-width*2-longitudeRearWall*0.75*0.25,posYRearWall-longitudeRearWall*0.75*2,posZ],[longitudeRearWall*0.75*0.25,width, height-width-2*(width*5)]);
	drawCube([posXRearWall-longitudeRearWall+width*2+longitudeRearWall*0.75*0.25,posYRearWall-longitudeRearWall*0.75*2,posZ],[longitudeRearWall*0.75*0.25,width, height-width-2*(width*5)]);

	//PINZAS IZQUIERDAS
	drawCube([posXRearWall-longitudeRearWall+width, posYRearWall-longitudeRearWall*0.75-width-width*6,posZ*0.5-(height-width)],[width*0.25,width*0.25,posZ*0.95]);
	drawCube([posXRearWall-longitudeRearWall+width, posYRearWall-longitudeRearWall*0.75-width+width*6,posZ*0.5-(height-width)],[width*0.25,width*0.25,posZ*0.95]);

	//PINZAS DERECHAS
	/*como la longitud de las pinzas es de la altura de la grua: posZ=4 es 4*0.95 que da 3.8,los container tendran que tener de altura 0.2. CUANDO LEVANTAMOS UN CONTAINER LO QUE
	VAMOS A TENER QUE VARIAR ES EL PARAMETRO CONRRESPONDIENTE A LA ESCALA NO LA POSICION EN Z DE LAS PINZAS*/
	drawCube([posXRearWall+longitudeRearWall-width, posYRearWall-longitudeRearWall*0.75-width-width*6,posZ*0.5-(height-width)],[width*0.25,width*0.25,posZ*0.95]);
	drawCube([posXRearWall+longitudeRearWall-width, posYRearWall-longitudeRearWall*0.75-width+width*6,posZ*0.5-(height-width)],[width*0.25,width*0.25,posZ*0.95]);
	
	//AGARRE IZQUIERDO
	drawCube([posXRearWall-longitudeRearWall+width, posYRearWall-longitudeRearWall*0.75-width,posZ*0.5-(height-width)-posZ*0.95],[width,width*10,width*.25]);
	
	//AGARRE DERECHO
	drawCube([posXRearWall+longitudeRearWall-width, posYRearWall-longitudeRearWall*0.75-width,posZ*0.5-(height-width)-posZ*0.95],[width,width*10,width*.25]);

}


function calculateHypotenuse(upperLeg,lowerLeg){
	return Math.sqrt(upperLeg * upperLeg + lowerLeg * lowerLeg);
}
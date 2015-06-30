function drawSky(where, scalator,degreesToRotate,axisToRotate){
	sphereSky.initBuffers();
	sphereSky.drawOverload(where, scalator,degreesToRotate,axisToRotate,skyTexture);
}

function drawOcean(where,scalator,texture){
	quad.initBuffers();
	quad.draw(where,scalator,texture);
}

function drawMountain(where,scalator,degreesToRotate,axisToRotate){
	mountain.initBuffers();
	mountain.drawOverload(where,scalator,degreesToRotate,axisToRotate,mountainTexture);
}

function drawContainers(where,scalator){
	var distanceBeetwenContainers=0.5;
	containerRed.setPosition(where);
	containerRed.initBuffers();
	containerRed.draw(where,scalator,pinzaTexture);

	var positionContainerYellow = [ where[0]+scalator[0]*2+distanceBeetwenContainers, where[1], where[2]];
	containerYellow.setPosition(positionContainerYellow);
	containerYellow.initBuffers();
	containerYellow.draw(positionContainerYellow,scalator,pinzaTexture);

	var positionContainerBlue = [ where[0]-scalator[0]*2-distanceBeetwenContainers, where[1], where[2]];
	containerBlue.setPosition(positionContainerBlue);
	containerBlue.initBuffers();
	containerBlue.draw(positionContainerBlue,scalator,pinzaTexture);

	var positionContainerGreen = [ where[0], where[1]-scalator[1]*2-distanceBeetwenContainers, where[2]];
	containerGreen.setPosition(positionContainerGreen);
	containerGreen.initBuffers();
	containerGreen.draw(positionContainerGreen,scalator,pinzaTexture);

	var positionContainerGray = [ where[0]-scalator[0]*2-distanceBeetwenContainers, where[1]-scalator[1]*2-distanceBeetwenContainers, where[2]];
	containerGray.setPosition(positionContainerGray);
	containerGray.initBuffers();
	containerGray.draw(positionContainerGray,scalator,pinzaTexture);
}

function drawShip(where,scalator,degreesToRotate,axisToRotate){
	ship.initBuffers();
	ship.drawOverload(where,scalator,degreesToRotate,axisToRotate,shipTexture);
	floor.initBuffers();
	floor.drawOverload(where,scalator,degreesToRotate,axisToRotate,floorShipTexture);
	bottomShip.initBuffers();
	bottomShip.drawOverload(where,scalator,degreesToRotate,axisToRotate,bottomShipTexture);
}

function drawWallCrane(posX,posY,posZ){
	var height = 4.0;
	var width = 0.1;
	var longitude = 0.2;
	var longitudeHypotenuse = calculateHypotenuse(height - posZ + longitude * 1.50 - longitude * 7, (height-longitude)/2 + width);
	var scale = [longitude,width,height];
	//columna 1
	cubo.draw([posX,posY,posZ],scale,craneTexture);	
	//columna 2
	cubo.draw([posX, posY + height, posZ],scale,craneTexture);
	//barra lateral baja
	cubo.draw([posX, posY + longitude * 10, posZ - longitude * 1.50],[longitude,(height-longitude)/2,width],craneTexture);
	//barra lateral alta
	cubo.draw([posX, posY + longitude * 10, height + posZ - width],[longitude,(height-longitude)/2,width],craneTexture);
	//barra diagonal			esta todo muy hardcodeado hay que optimizar
	cubo.drawOverload([posX, posY+longitude*10, height-longitude*6],[longitude*0.5,longitudeHypotenuse,width],45,[1,0,0],craneTexture);
}

//PRE: POSX TIENE QUE SER DISTINTO DE CERO
function drawCrame(posX,posY,posZ){
	var height = 4.0;
	var width = 0.10;
	var longitude = 0.20;
	var distanceBeetwenWalls=4;
	cubo.initBuffers();
	
	//el piso
	cubo.draw([4,4,gruaAbajo+ruedasAncho-1],[14,6,1],floorTexture);	//Ese -1 en la Z es por el alto de la grua
	cubo.draw([32,4,gruaAbajo+ruedasAncho-1],[14,6,1],floorTexture);	//Ese -1 en la Z es por el alto de la grua

	//PAREDES LATERALES
	drawWallCrane(posX,posY,posZ);
    drawWallCrane(posX+distanceBeetwenWalls,posY,posZ);

    //BARRAS HORIZONTALES
	cubo.draw([ posX+distanceBeetwenWalls*0.5, posY+longitude*4, height+posZ-width ],[distanceBeetwenWalls-height/2-longitude , width*2,width],craneTexture);
	cubo.draw([ posX+distanceBeetwenWalls*0.5, posY+height-longitude*4 , height+posZ-width ],[distanceBeetwenWalls-height/2-longitude ,width*2,width],craneTexture);

    //SOPORTE
    cubo.draw([posX+distanceBeetwenWalls*0.5+(distanceBeetwenWalls*0.5)/5 , posY - longitude * 6 , height + posZ - width],[longitude,distanceBeetwenWalls * 1.5,width*1.5],craneTexture);
   	cubo.draw([posX+distanceBeetwenWalls*0.5-(distanceBeetwenWalls*0.5)/5 , posY - longitude * 6 , height + posZ - width],[longitude,distanceBeetwenWalls * 1.5,width*1.5],craneTexture);

    //UNION ENTRE AMBOS SOPORTES
    cubo.draw([posX+distanceBeetwenWalls*0.5, posY-longitude*6-distanceBeetwenWalls*1.5- width, height + posZ - width ],[ (distanceBeetwenWalls * 0.5) * 1/5 + width * 2,  width, width * 1.5],craneTexture);

    //CONTRAPESO
    cubo.draw([posX+distanceBeetwenWalls*0.5, posY-longitude*6+distanceBeetwenWalls*1.5, height + posZ - width ],[ (distanceBeetwenWalls * 0.5) * 1/5 + width * 3, distanceBeetwenWalls * 0.15, distanceBeetwenWalls * 0.15],craneTexture);

    //CABINA
    drawCabin(posX, posY+moverCabina, height, posZ );
	
	//Postes de Luz		
	cubo.draw([-7,0,gruaAbajo+ruedasAncho+2],[0.08,0.08,2],craneTexture);
	cubo.draw([15,0,gruaAbajo+ruedasAncho+2],[0.08,0.08,2],craneTexture);
	var bulbSize = 0.5;
	sphereLamp.initBuffers();
	sphereLamp.drawOverload([-7,0,0.8], [bulbSize,bulbSize,bulbSize],0,[0,0,0],whiteTexture);
	sphereLamp.drawOverload([15,0,0.8], [bulbSize,bulbSize,bulbSize],0,[0,0,0],whiteTexture);
	//LAS RUEDAS
	drawWheels(posX,posY,posZ,distanceBeetwenWalls,height,width);
}

function drawWheels(posX,posY,posZ,distanceBeetwenWalls,distanciaRuedas,anchoGruaY){
	var scaleDown = 1.97;
	var radio = 1*scaleDown;
	var scaleX = 1/scaleDown;
	var scaleY = 1/scaleDown;
	var scaleZ = 0.07;	//ver que sea el ancho de la grua
	var wheelScale = [scaleX,scaleY,scaleZ];
	cilindro.initBuffers();
	
	cilindro.draw([posX,posY+anchoGruaY+scaleZ*4/2,-posZ-radio],wheelScale,90, [1,0,0],wheelTexture);
	cilindro.draw([posX,posY-anchoGruaY-scaleZ*4/2,-posZ-radio],wheelScale,90, [1,0,0],wheelTexture);
	
	cilindro.draw([posX+distanceBeetwenWalls,posY+anchoGruaY+scaleZ*4/2,-posZ-radio],wheelScale,90, [1,0,0],wheelTexture);
	cilindro.draw([posX+distanceBeetwenWalls,posY-anchoGruaY-scaleZ*4/2,-posZ-radio],wheelScale,90, [1,0,0],wheelTexture);

	cilindro.draw([posX,posY-anchoGruaY-scaleZ*4/2+distanciaRuedas,-posZ-radio],wheelScale,90, [1,0,0],wheelTexture);
	cilindro.draw([posX,posY+anchoGruaY+scaleZ*4/2+distanciaRuedas,-posZ-radio],wheelScale,90, [1,0,0],wheelTexture);
	
	cilindro.draw([posX+distanceBeetwenWalls,posY-anchoGruaY-scaleZ*4/2+distanciaRuedas,-posZ-radio],wheelScale,90, [1,0,0],wheelTexture);
	cilindro.draw([posX+distanceBeetwenWalls,posY+anchoGruaY+scaleZ*4/2+distanciaRuedas,-posZ-radio],wheelScale,90, [1,0,0],wheelTexture);
}

function drawCabin(posX,posY,posZ,height){
	var distanceBeetwenWalls = 4;
	var longitude = 0.20;
	var width = 0.05;
	var posXRearWall = posX+distanceBeetwenWalls*0.5;
	var longitudeRearWall = (distanceBeetwenWalls*0.5)*1/5+width*3;
	var posYRearWall = posY-longitude*6-distanceBeetwenWalls*1.5-width+longitudeRearWall*0.75*6;
	
	//PARED TRASERA
	cubo.draw([posXRearWall, posYRearWall, posZ],[longitudeRearWall,width, height-width],craneTexture);

	//PISO
	cubo.draw([posXRearWall+longitudeRearWall-width, posYRearWall-longitudeRearWall*0.75-width,posZ-height+width*7],[width,longitudeRearWall*0.75, width*4],craneTexture);
	cubo.draw([posXRearWall-longitudeRearWall+width, posYRearWall-longitudeRearWall*0.75-width,posZ-height+width*7],[width,longitudeRearWall*0.75, width*4],craneTexture);
	cubo.draw([posXRearWall,posYRearWall-longitudeRearWall*0.75*2,posZ-height+width*7],[longitudeRearWall-width*2,width, width*4],craneTexture);	
	
	//TECHO
	cubo.draw([posXRearWall, posYRearWall-longitudeRearWall*0.75-width, posZ+height-width*2],[longitudeRearWall,longitudeRearWall*0.75, width],craneTexture);
	cubo.draw([posXRearWall+longitudeRearWall-width, posYRearWall-longitudeRearWall*0.75-width, posZ+height-width*7],[width,longitudeRearWall*0.75, width*4],craneTexture);
	cubo.draw([posXRearWall-longitudeRearWall+width, posYRearWall-longitudeRearWall*0.75-width, posZ+height-width*7],[width,longitudeRearWall*0.75, width*4],craneTexture);
	cubo.draw([posXRearWall, posYRearWall-longitudeRearWall*0.75*2, posZ+height-width*7],[longitudeRearWall-width*2,width, width*4],craneTexture);

	//LATERALES IZQUIERDOS
	cubo.draw([posXRearWall-longitudeRearWall+width,posYRearWall-width*4, posZ],[width,longitudeRearWall*0.75*0.25, height-11*width],craneTexture);
	cubo.draw([posXRearWall-longitudeRearWall+width,posYRearWall-longitudeRearWall*0.75*2+longitudeRearWall*0.75*0.25-width,posZ],[width,longitudeRearWall*0.75*0.25, height-11*width],craneTexture);

	//LATERALES DERECHOS	
	cubo.draw([posXRearWall+longitudeRearWall-width,posYRearWall-width*4,posZ],[width,longitudeRearWall*0.75*0.25, height-width-2*(width*5)],craneTexture);
	cubo.draw([posXRearWall+longitudeRearWall-width,posYRearWall-longitudeRearWall*0.75*2+longitudeRearWall*0.75*0.25-width,posZ],[width,longitudeRearWall*0.75*0.25, height-11*width],craneTexture);

	//PARTE FRONTAL
	cubo.draw([posXRearWall+longitudeRearWall-width*2-longitudeRearWall*0.75*0.25,posYRearWall-longitudeRearWall*0.75*2,posZ],[longitudeRearWall*0.75*0.25,width, height-width-2*(width*5)],craneTexture);
	cubo.draw([posXRearWall-longitudeRearWall+width*2+longitudeRearWall*0.75*0.25,posYRearWall-longitudeRearWall*0.75*2,posZ],[longitudeRearWall*0.75*0.25,width, height-width-2*(width*5)],craneTexture);
	
	//AGARRE IZQUIERDO
	cubo.draw([posXRearWall-longitudeRearWall+width, posYRearWall-longitudeRearWall*0.75-width,posZ*0.5-(height-width)-posZ*scaleDeLasPinzas+2],[width,width*10,width*.25],craneTexture);
	
	//AGARRE DERECHO
	cubo.draw([posXRearWall+longitudeRearWall-width, posYRearWall-longitudeRearWall*0.75-width,(posZ*0.5-(height-width)-posZ*scaleDeLasPinzas+2)],[width,width*10,width*.25],craneTexture);
	//GARRAS
	garras.initBuffers();
	
	//PINZAS IZQUIERDAS
	garras.draw([posXRearWall-longitudeRearWall+width, posYRearWall-longitudeRearWall*0.75-width-width*6,posZ-height+width],[width*0.25,width*0.25,posZ*scaleDeLasPinzas],pinzaTexture)
	garras.draw([posXRearWall-longitudeRearWall+width, posYRearWall-longitudeRearWall*0.75-width+width*6,posZ-height+width],[width*0.25,width*0.25,posZ*scaleDeLasPinzas],pinzaTexture);

	//PINZAS DERECHAS
	garras.draw([posXRearWall+longitudeRearWall-width, posYRearWall-longitudeRearWall*0.75-width-width*6,posZ-height+width],[width*0.25,width*0.25,posZ*scaleDeLasPinzas],pinzaTexture);
	garras.draw([posXRearWall+longitudeRearWall-width, posYRearWall-longitudeRearWall*0.75-width+width*6,posZ-height+width],[width*0.25,width*0.25,posZ*scaleDeLasPinzas],pinzaTexture);
}


function calculateHypotenuse(upperLeg,lowerLeg){
	return Math.sqrt(upperLeg * upperLeg + lowerLeg * lowerLeg);
}
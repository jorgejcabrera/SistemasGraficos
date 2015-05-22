function triangle () {
	triangleVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
	var vertices = [
		 0.0,  1.0,  0.0,
		-1.0, -1.0,  0.0,
		 1.0, -1.0,  0.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	triangleVertexPositionBuffer.itemSize = 3;		/*puntos correspondientes a cada vertice*/
	triangleVertexPositionBuffer.numItems = 3;		/*cantidad de vertices*/
}

function square () {
	squareVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
	var vertices = [
		-1.0,	1.0,	0.0,
		1.0,	1.0,	0.0,
		-1.0,	-1.0,	0.0,
		1.0,	-1.0,	0.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	squareVertexPositionBuffer.itemSize = 3;
	squareVertexPositionBuffer.numItems = 4;
}

function cube () {
	cubeVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
	var vertices = [
		-1.0,	1.0,	1.0,	//0
		1.0,	1.0,	1.0,	//1
		-1.0,	-1.0,	1.0,	//2
		1.0,	-1.0,	1.0,	//3
		-1.0,	1.0,	-1.0,	//4
		1.0,	1.0,	-1.0,	//5
		-1.0,	-1.0,	-1.0,	//6
		1.0,	-1.0,	-1.0,	//7
		//para el top face
		-1.0,	1.0,	1.0,	//8
		1.0,	1.0,	1.0,	//9
		-1.0,	1.0,	-1.0,	//10
		1.0,	1.0,	-1.0,	//11
		//para el bottom face
		-1.0,	-1.0,	1.0,	//12
		1.0,	-1.0,	1.0,	//13
		-1.0,	-1.0,	-1.0,	//14
		1.0,	-1.0,	-1.0,	//15
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	cubeVertexPositionBuffer.itemSize = 3;
	cubeVertexPositionBuffer.numItems = 16;
	
	//Y luego para usar el vertex index:
	cubeVertexIndexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
	var cubeVertexIndices = [
		0, 1, 2,   1, 2, 3,    		// Front face
		4, 5, 6,   5, 6, 7,    		// Back face
		8, 9, 10,   9, 10, 11,  	// Top face
		12, 13, 14,   13, 14, 15, 	// Bottom face
		1, 3, 5,   3, 5, 7, 		// Right face
		0, 2, 4,   2, 4, 6  		// Left face
	]
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
	cubeVertexIndexBuffer.itemSize = 1;
	cubeVertexIndexBuffer.numItems = 36;
	
	cubeVertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
    var textureCoords = [
	//para cada uno de los ocho vértices que estoy utilizando 	
      0.0, 0.0,
      1.0, 0.0,
      0.0, 1.0,
      1.0, 1.0,
	  1.0, 0.0,
	  0.0, 0.0,
	  1.0, 1.0,
	  0.0, 1.0,
	  //la cara de arriba
	  0.0, 0.0,
	  1.0, 0.0,
	  0.0, 1.0,
	  1.0, 1.0,
	  //la cara de abajo
	  0.0, 0.0,
	  1.0, 0.0,
	  0.0, 1.0,
	  1.0, 1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    cubeVertexTextureCoordBuffer.itemSize = 2;
    cubeVertexTextureCoordBuffer.numItems = 16;		
}

function pyramid(){
	pyramidVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, pyramidVertexPositionBuffer);
    var vertices = [
		// Front face
        0.0,  1.0,  0.0,
        -1.0, -1.0,  1.0,
        1.0, -1.0,  1.0,
        // Right face
        0.0,  1.0,  0.0,
        1.0, -1.0,  1.0,
        1.0, -1.0, -1.0,
        // Back face
        0.0,  1.0,  0.0,
        1.0, -1.0, -1.0,
        -1.0, -1.0, -1.0,
        // Left face
        0.0,  1.0,  0.0,
        -1.0, -1.0, -1.0,
        -1.0, -1.0,  1.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    pyramidVertexPositionBuffer.itemSize = 3;
    pyramidVertexPositionBuffer.numItems = 12;
}

function cylinder(){ //puntas, radio
	var puntas = 4;
	var radio = 1;
	var angulo = degToRad(puntas/360);
	var verticesCylinder = [];
	
	cylinderVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cylinderVertexPositionBuffer);
	
	//Hago la tapa de arriba
	for (i = 0; i < puntas ; i++){
		var j = i*3;    	
     	var angle = i*angulo; 
    	verticesCylinder[j] = Math.cos(angle);
		verticesCylinder[j+1] = Math.sin(angle);
		verticesCylinder[j+2] = -2;
    }
	//Hago la tapa de abajo
	for (i = 4; i < (puntas*2) ; i++){
		var j = i*3;    	
     	var angle = i*angulo; 
    	verticesCylinder[j] = Math.cos(angle);
		verticesCylinder[j+1] = Math.sin(angle);
		verticesCylinder[j+2] = 2;
    }
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesCylinder), gl.STATIC_DRAW);
	cylinderVertexPositionBuffer.itemSize = 3;
	cylinderVertexPositionBuffer.numItems = puntas*2;
	
	//Y luego para usar el vertex index:
	cylinderVertexIndexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cylinderVertexIndexBuffer);
	var cylinderVertexIndices = [
		0, 1, 2,   1, 2, 3,    		// Front face
		4, 5, 6,   5, 6, 7,    		// Back face
	]
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cylinderVertexIndices), gl.STATIC_DRAW);
	cylinderVertexIndexBuffer.itemSize = 1;
	cylinderVertexIndexBuffer.numItems = 12;
	
	cylinderVertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cylinderVertexTextureCoordBuffer);
    var textureCoordsCylinder = [
	//para cada uno de los ocho vértices que estoy utilizando 	
      0.0, 0.0,
      1.0, 0.0,
      0.0, 1.0,
      1.0, 1.0,
	  1.0, 0.0,
	  0.0, 0.0,
	  1.0, 1.0,
	  0.0, 1.0,
	  //la cara de arriba
	  0.0, 0.0,
	  1.0, 0.0,
	  0.0, 1.0,
	  1.0, 1.0,
	  //la cara de abajo
	  0.0, 0.0,
	  1.0, 0.0,
	  0.0, 1.0,
	  1.0, 1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsCylinder), gl.STATIC_DRAW);
    cylinderVertexTextureCoordBuffer.itemSize = 2;
    cylinderVertexTextureCoordBuffer.numItems = puntas*2;		
}
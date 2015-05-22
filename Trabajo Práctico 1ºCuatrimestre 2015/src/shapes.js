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
	cubeVertexPositionBuffer.numItems = 8;
	
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
    cubeVertexTextureCoordBuffer.numItems = 12;		
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

function cylinder(){
	// Definimos un array de Javascript con las posiciones de los vertices.
    var vertices = [];
    var radius = 1;

    //esto seria la tapa de arriba, ahora tendria que meterle el tubo
    for (i = 0; i <= 360 ; i++){
	var j = i*3;    	
     	var angleConversion = i*(Math.PI)/180; 
    	vertices[j] = Math.cos(angleConversion);
	vertices[j+1] = Math.sin(angleConversion);
	vertices[j+2] = -2;
    }
    //esto seria el tubo
    for (i = 361; i <= 721 ; i++){
	var j = i*3;    	
     	var angleConversion = i*(Math.PI)/180; 
    	vertices[j] = Math.cos(angleConversion);
	vertices[j+1] = Math.sin(angleConversion);
	if (i%2 == 0){
		vertices[j+2] = 2;
	} else{ vertices[j+2] = -2;
		}
    }
    //el fan de la tapa de abajo
    vertices[2166] = 0;
    vertices[2167] = 0;
    vertices[2168] = 2;
    //esto seria la tapa de abajo, ahora tendria que meterle el tubo
    for (i = 723; i <= 1083 ; i++){
	var j = i*3;    	
     	var angleConversion = i*(Math.PI)/180; 
    	vertices[j] = Math.cos(angleConversion);
	vertices[j+1] = Math.sin(angleConversion);
	vertices[j+2] = 2;
    }
    // Creamos un buffer de vertices para WebGL.
    cubeVertexBuffer = gl.createBuffer();

    // Le decimos a WebGL que las siguientes funciones se relacionan con ese buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexBuffer);

    // Cargamos datos de posiciones en el buffer.
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Definimos los colores de cada cara en un nuevo array Javascript.
    var colors = [
      [1.0,  1.0,  1.0,  1.0],    // Cara frontal: blanco
      [1.0,  0.0,  0.0,  1.0],    // Cara de atrás: rojo
      [0.0,  1.0,  0.0,  1.0],    // Cara de arriba: verde
      [0.0,  0.0,  1.0,  1.0],    // Cara de abajo: azul
      [1.0,  1.0,  0.0,  1.0],    // Cara de la derecha: amarillo
      [1.0,  0.0,  1.0,  1.0],    // Cara de la izquierda: violeta
      [1.0,  1.0,  1.0,  1.0],    // Cara frontal: blanco
      [1.0,  0.0,  0.0,  1.0],    // Cara de atrás: rojo
      [0.0,  1.0,  0.0,  1.0],    // Cara de arriba: verde
      [0.0,  0.0,  1.0,  1.0],    // Cara de abajo: azul
      [1.0,  1.0,  0.0,  1.0],    // Cara de la derecha: amarillo
      [1.0,  0.0,  1.0,  1.0],    // Cara de la izquierda: violeta
      [1.0,  1.0,  1.0,  1.0],    // Cara frontal: blanco
      [1.0,  0.0,  0.0,  1.0],    // Cara de atrás: rojo
      [0.0,  1.0,  0.0,  1.0],    // Cara de arriba: verde
      [0.0,  0.0,  1.0,  1.0],    // Cara de abajo: azul
      [1.0,  1.0,  0.0,  1.0],    // Cara de la derecha: amarillo
      [1.0,  0.0,  1.0,  1.0],    // Cara de la izquierda: violeta
      [1.0,  1.0,  1.0,  1.0],    // Cara frontal: blanco
      [1.0,  0.0,  0.0,  1.0],    // Cara de atrás: rojo
      [0.0,  1.0,  0.0,  1.0],    // Cara de arriba: verde
      [0.0,  0.0,  1.0,  1.0],    // Cara de abajo: azul
      [1.0,  1.0,  0.0,  1.0],    // Cara de la derecha: amarillo
      [1.0,  0.0,  1.0,  1.0],    // Cara de la izquierda: violeta
      [1.0,  1.0,  1.0,  1.0],    // Cara frontal: blanco
      [1.0,  0.0,  0.0,  1.0],    // Cara de atrás: rojo
      [0.0,  1.0,  0.0,  1.0],    // Cara de arriba: verde
      [0.0,  0.0,  1.0,  1.0],    // Cara de abajo: azul
      [1.0,  1.0,  0.0,  1.0],    // Cara de la derecha: amarillo
      [1.0,  0.0,  1.0,  1.0],    // Cara de la izquierda: violeta

    ];
  
    // Replicamos los colores de cada cara cuatro veces.
    var generatedColors = [];
    for (var j=0; j<colors.length; j++) {
      var c = colors[j];
      for (var i=0; i<60; i++) {
        generatedColors = generatedColors.concat(c);
      }
    }

    // Cargamos los datos de los colores en un nuevo buffer igual que con las posiciones
    cubeVertexColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexColorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(generatedColors), gl.STATIC_DRAW);

    // Definimos con que indices de los buffers definidos antes, se debe dibujar
    // cada vertice de cada triangulo. 
    // Cada cara del cubo se compone de dos triángulos.
    var cubeVertexIndices = [];

    // para la tapa de arriba
    for (i = 0; i <= 360 ; i++){
    	var j = i*3;
    	cubeVertexIndices[j] = 0;
	cubeVertexIndices[j+1] = i+1;
	cubeVertexIndices[j+2] = i+2;
    }
    //para el tubo
    for (i = 361; i <= 721 ; i++){
    	var j = i*3;
    	cubeVertexIndices[j] = i;
	cubeVertexIndices[j+1] = i+1;
	cubeVertexIndices[j+2] = i+2;
    }
    // para la tapa de abajo
    for (i = 722; i <= 1083; i++){
    	var j = i*3;
    	cubeVertexIndices[j] = 722;
	cubeVertexIndices[j+1] = i+1;
	cubeVertexIndices[j+2] = i+2;
    }
    // Definimos y cargamos los datos en el buffer WebGL correspondiente.
    // Notar que esta vez se usa ELEMENT_ARRAY_BUFFER en lugar de ARRAY_BUFFER.
    // Notar también que se usa un array de enteros en lugar de floats.
    cubeVertexIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), 
                  gl.STATIC_DRAW);
}
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

function square () {
	this.webgl_position_buffer = null;
	this.webgl_normal_buffer = null;
	this.webgl_texture_coord_buffer = null;
	this.webgl_index_buffer = null;
	
	this.webgl_position_buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_position_buffer);
	var vertices = [
		-1.0,	1.0,	0.0,	//0
		1.0,	1.0,	0.0,	//1
		-1.0,	-1.0,	0.0,	//2
		1.0,	-1.0,	0.0		//3
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	this.webgl_position_buffer.itemSize = 3;
	this.webgl_position_buffer.numItems = 4;
	
	//Ahora le digo como usar esos vértices
	this.webgl_index_buffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.webgl_index_buffer);
	var cubeVertexIndices = [
		0, 1, 2,   1, 2, 3
	]
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
	this.webgl_index_buffer.itemSize = 1;
	this.webgl_index_buffer.numItems = 6;
	
	//Y aca le pongo la textura al cuadrado
	this.webgl_texture_coord_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_texture_coord_buffer);
    var textureCoords = [
	//para cada uno de los ocho vértices que estoy utilizando 	
      0.0, 1.0,
      1.0, 1.0,
      0.0, 0.0,
      1.0, 0.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    this.webgl_texture_coord_buffer.itemSize = 2;
    this.webgl_texture_coord_buffer.numItems = 4;	
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

function cylinder(puntas,radio){ //puntas, radio
	var angulo = degToRad(360/puntas);
	var verticesCylinder = [];
	
	cylinderVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cylinderVertexPositionBuffer);
	
	//Hago la tapa de arriba
	for (i = 0; i < puntas ; i++){
     	var angle = i*angulo; 
    	verticesCylinder.push(Math.cos(angle)*radio);
		verticesCylinder.push(Math.sin(angle)*radio);
		verticesCylinder.push(2.0);
    }
	//Hago la tapa de abajo
	for (i = puntas; i < (puntas*2) ; i++){
     	var angle = i*angulo; 
    	verticesCylinder.push(Math.cos(angle)*radio);
		verticesCylinder.push(Math.sin(angle)*radio);
		verticesCylinder.push(-2.0);
    }

	verticesCylinder.push(0.0);		//viene a ser el puntas * 2
	verticesCylinder.push(0.0);		//viene a ser el puntas * 2 
	verticesCylinder.push(2.0);		//viene a ser el puntas * 2
	verticesCylinder.push(0.0);		//viene a ser el puntas * 2+1
	verticesCylinder.push(0.0);		//viene a ser el puntas * 2+1
	verticesCylinder.push(-2.0);	//viene a ser el puntas * 2+1
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesCylinder), gl.STATIC_DRAW);
	cylinderVertexPositionBuffer.itemSize = 3;
	cylinderVertexPositionBuffer.numItems = ( verticesCylinder.length / 3);
	//console.log(cylinderVertexPositionBuffer.numItems)
	
	//Y luego para usar el vertex index:
	var cylinderVertexIndices=[];
	cylinderVertexIndexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cylinderVertexIndexBuffer);
	
	//TAPA DE ARRIBA
	
	for(i=0;i<puntas;i++){
		cylinderVertexIndices.push(puntas*2);
		cylinderVertexIndices.push(i);
		if( i == puntas-1)
			cylinderVertexIndices.push(0);
		else
			cylinderVertexIndices.push(i+1);
	}
	
	//TAPA DE ABAJO
	for(i=puntas;i<puntas*2;i++){
		cylinderVertexIndices.push(puntas*2+1);
		cylinderVertexIndices.push(i);
		if( i == puntas*2-1)
			cylinderVertexIndices.push(puntas);
		else
			cylinderVertexIndices.push(i+1);
	}
	/*
	for(wasd=0;wasd<puntas-1;wasd++){
		cylinderVertexIndices.push(wasd);
		cylinderVertexIndices.push(wasd+1);
		cylinderVertexIndices.push(wasd+puntas);
	}
	for(wasd=puntas;wasd<puntas*2-1;wasd++){
		cylinderVertexIndices.push(wasd);
		cylinderVertexIndices.push(wasd+1);
		cylinderVertexIndices.push(wasd-puntas);
	}*/	
	
	//LATERAL DEL TUBO
	//Notar como que son dos niveles ese for se ejecuta una sola vez
	niveles = 2;
	for(niv=0;niv<niveles-1;niv++){
		for(io=0;io<puntas-1;io++){
			cylinderVertexIndices.push(niv*puntas+io);
			cylinderVertexIndices.push(niv*puntas +io+1);
			cylinderVertexIndices.push((niv+1)*puntas +io);
			
			cylinderVertexIndices.push((niv+1)*puntas +io);
			cylinderVertexIndices.push((niv+1)*puntas +io+1);
			cylinderVertexIndices.push(niv*puntas +io+1);
		}
	//Esto es lo que va al final porque vuelve a cero, onda va de 0 1 2 3 4 Y vuelve a 0 en vez de ir al 5
	cylinderVertexIndices.push(niv*puntas+(puntas-1));
	cylinderVertexIndices.push(niv*puntas);
	cylinderVertexIndices.push((niv+1)*puntas+(puntas-1));
	
	cylinderVertexIndices.push((niv+1)*puntas +io);
	cylinderVertexIndices.push(puntas);
	cylinderVertexIndices.push(0);
				
	}
	
	
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cylinderVertexIndices), gl.STATIC_DRAW);
	cylinderVertexIndexBuffer.itemSize = 1;
	cylinderVertexIndexBuffer.numItems = cylinderVertexIndices.length;
	
	
	var textureCoordsCylinder = [];
	cylinderVertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cylinderVertexTextureCoordBuffer);
	
	//TEXTURAS TAPA SUPERIOR NOTAR QUE ES UNA POR CADA VERTICE
	for(i=0;i<puntas;i++){
		var firstCoordOfTextureCos = ((Math.cos(degToRad(360*i/puntas))) +1)/2;	//Le aplico una escala por eso el (cos+1)/2 
		var firstCoordOfTextureSin = ((Math.sin(degToRad(360*i/puntas))) +1)/2;	//Ya que paso de la escala -1 a +1, a la escala 0 a +1
		textureCoordsCylinder.push(firstCoordOfTextureCos);
		textureCoordsCylinder.push(firstCoordOfTextureSin);
	}

	//TEXTURAS TAPA INFERIOR
	for(i=puntas;i<puntas*2;i++){
		var iCorrection = i - puntas;
		var firstCoordOfTextureCos = ((Math.cos(degToRad(360*iCorrection/puntas))) +1)/2 ;	//Le aplico una escala por eso el (cos+1)/2 
		var firstCoordOfTextureSin = ((Math.sin(degToRad(360*iCorrection/puntas))) +1)/2;	//Ya que paso de la escala -1 a +1, a la escala 0 a +1
		textureCoordsCylinder.push(firstCoordOfTextureCos);
		textureCoordsCylinder.push(firstCoordOfTextureSin);
	}
	//Las texturas de los fanes (Notar que estan en la posicion de puntas * 2 para que quede en el mismo orden que los vertices)
	textureCoordsCylinder.push(0.5);
	textureCoordsCylinder.push(0.5);
	textureCoordsCylinder.push(0.5);
	textureCoordsCylinder.push(0.5);
	
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsCylinder), gl.STATIC_DRAW);
    cylinderVertexTextureCoordBuffer.itemSize = 2;
    cylinderVertexTextureCoordBuffer.numItems = textureCoordsCylinder.length/2;	
}


//Veamos como hacer para que funcione la esfera con nuestro tp
function TexturedSphere(latitude_bands, longitude_bands){

	this.latitudeBands = latitude_bands;
	this.longitudeBands = longitude_bands;
	
	this.position_buffer = null;
	this.normal_buffer = null;
	this.texture_coord_buffer = null;
	this.index_buffer = null;

	this.webgl_position_buffer = null;
	this.webgl_normal_buffer = null;
	this.webgl_texture_coord_buffer = null;
	this.webgl_index_buffer = null;
	


	// Se generan los vertices para la esfera, calculando los datos para una esfera de radio 1
	// Y también la información de las normales y coordenadas de textura para cada vertice de la esfera
	// La esfera se renderizara utilizando triangulos, para ello se arma un buffer de índices 
	// a todos los triángulos de la esfera
	this.initBuffers = function(){

		this.position_buffer = [];
		this.normal_buffer = [];
		this.texture_coord_buffer = [];

		var latNumber;
		var longNumber;

		for (latNumber=0; latNumber <= this.latitudeBands; latNumber++) {
			var theta = latNumber * Math.PI / this.latitudeBands;
			var sinTheta = Math.sin(theta);
			var cosTheta = Math.cos(theta);

			for (longNumber=0; longNumber <= this.longitudeBands; longNumber++) {
				var phi = longNumber * 2 * Math.PI / this.longitudeBands;
				var sinPhi = Math.sin(phi);
				var cosPhi = Math.cos(phi);

				var x = cosPhi * sinTheta;
				var y = cosTheta;
				var z = sinPhi * sinTheta;
				var u = 1.0 - (longNumber / this.longitudeBands);
				var v = 1.0 - (latNumber / this.latitudeBands);

				this.normal_buffer.push(x);
				this.normal_buffer.push(y);
				this.normal_buffer.push(z);

				this.texture_coord_buffer.push(u);
				this.texture_coord_buffer.push(v);
				
				this.position_buffer.push(x);
				this.position_buffer.push(y);
				this.position_buffer.push(z);
			}
		}

		// Buffer de indices de los triangulos
		this.index_buffer = [];
	  
		for (latNumber=0; latNumber < this.latitudeBands; latNumber++) {
			for (longNumber=0; longNumber < this.longitudeBands; longNumber++) {
				var first = (latNumber * (this.longitudeBands + 1)) + longNumber;
				var second = first + this.longitudeBands + 1;
				this.index_buffer.push(first);
				this.index_buffer.push(second);
				this.index_buffer.push(first + 1);

				this.index_buffer.push(second);
				this.index_buffer.push(second + 1);
				this.index_buffer.push(first + 1);
			}
		}

		// Creación e Inicialización de los buffers a nivel de OpenGL
		this.webgl_normal_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_normal_buffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.normal_buffer), gl.STATIC_DRAW);
		this.webgl_normal_buffer.itemSize = 3;
		this.webgl_normal_buffer.numItems = this.normal_buffer.length / 3;

		this.webgl_texture_coord_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_texture_coord_buffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.texture_coord_buffer), gl.STATIC_DRAW);
		this.webgl_texture_coord_buffer.itemSize = 2;
		this.webgl_texture_coord_buffer.numItems = this.texture_coord_buffer.length / 2;

		this.webgl_position_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_position_buffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.position_buffer), gl.STATIC_DRAW);
		this.webgl_position_buffer.itemSize = 3;
		this.webgl_position_buffer.numItems = this.position_buffer.length / 3;

		this.webgl_index_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.webgl_index_buffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.index_buffer), gl.STATIC_DRAW);
		this.webgl_index_buffer.itemSize = 1;
		this.webgl_index_buffer.numItems = this.index_buffer.length;
	}

	this.draw = function(){

		// Se configuran los buffers que alimentarán el pipeline
		gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_position_buffer);
		gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, this.webgl_position_buffer.itemSize, gl.FLOAT, false, 0, 0);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_texture_coord_buffer);
		gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, this.webgl_texture_coord_buffer.itemSize, gl.FLOAT, false, 0, 0);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_normal_buffer);
		gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, this.webgl_normal_buffer.itemSize, gl.FLOAT, false, 0, 0);

		//gl.activeTexture(gl.TEXTURE0);
		//gl.bindTexture(gl.TEXTURE_2D, this.texture);
		//gl.uniform1i(shaderProgram.samplerUniform, 0);
		
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.webgl_index_buffer);
		//gl.drawElements(gl.LINE_LOOP, this.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
		gl.drawElements(gl.TRIANGLES, this.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
		/////////////////////////////////
	}
	
}
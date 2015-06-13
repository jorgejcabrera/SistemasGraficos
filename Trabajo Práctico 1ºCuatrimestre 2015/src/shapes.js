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

function pinza () {
	this.webgl_position_buffer = null;
	this.webgl_normal_buffer = null;
	this.webgl_texture_coord_buffer = null;
	this.webgl_index_buffer = null;	

	this.vertices = [
		0.0,	0.0,	0.0,	//0
		1.0,	0.0,	0.0,	//1
		0.0,	-1.0,	0.0,	//2
		1.0,	-1.0,	0.0,	//3
		0.0,	0.0,	-1.0,	//4
		1.0,	0.0,	-1.0,	//5
		0.0,	-1.0,	-1.0,	//6
		1.0,	-1.0,	-1.0,	//7
		//para el top face
		0.0,	0.0,	0.0,	//8
		1.0,	0.0,	0.0,	//9
		0.0,	0.0,	-1.0,	//10
		1.0,	0.0,	-1.0,	//11
		//para el bottom face
		0.0,	-1.0,	0.0,	//12
		1.0,	-1.0,	0.0,	//13
		0.0,	-1.0,	-1.0,	//14
		1.0,	-1.0,	-1.0,	//15
	];
	
	//Y luego para usar el vertex index:
	this.cubeVertexIndices = [
		0, 1, 2,   1, 2, 3,    		// Front face
		4, 5, 6,   5, 6, 7,    		// Back face
		8, 9, 10,   9, 10, 11,  	// Top face
		12, 13, 14,   13, 14, 15, 	// Bottom face
		1, 3, 5,   3, 5, 7, 		// Right face
		0, 2, 4,   2, 4, 6  		// Left face
	]

    this.textureCoords = [
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
	
	this.getVertices = function(){
		return this.vertices;
	}
	this.getVertexIndices = function(){
		return this.cubeVertexIndices;
	}
	this.getTextureCoords = function(){
		return this.textureCoords;
	}
	
	this.initBuffers = function(){
		//Vertices de las pinzas
		this.webgl_position_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_position_buffer);	
		
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.getVertices()), gl.STATIC_DRAW);
		this.webgl_position_buffer.itemSize = 3;
		this.webgl_position_buffer.numItems = 16;
		//Index Vertex de las pinzas
		this.webgl_index_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.webgl_index_buffer);
		
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.getVertexIndices()), gl.STATIC_DRAW);
		this.webgl_index_buffer.itemSize = 1;
		this.webgl_index_buffer.numItems = 36;
		//Coordenadas de textura
		this.webgl_texture_coord_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_texture_coord_buffer);
		
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.getTextureCoords()), gl.STATIC_DRAW);
		this.webgl_texture_coord_buffer.itemSize = 2;
		this.webgl_texture_coord_buffer.numItems = 16;	
	}
	
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
	this.webgl_position_buffer = null;
	this.webgl_normal_buffer = null;
	this.webgl_texture_coord_buffer = null;
	this.webgl_index_buffer = null;

	var angulo = degToRad(360/puntas);
	var verticesCylinder = [];
	
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
	verticesCylinder.push(1.6);		//viene a ser el puntas * 2
	verticesCylinder.push(0.0);		//viene a ser el puntas * 2+1
	verticesCylinder.push(0.0);		//viene a ser el puntas * 2+1
	verticesCylinder.push(-1.6);	//viene a ser el puntas * 2+1	

	//Y luego para usar el vertex index:
	var cylinderVertexIndices=[];
	
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
	
	var textureCoordsCylinder = [];
	
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
	
	this.getVertex = function(){
		return verticesCylinder;
	}
	this.getVertexIndex = function(){
		return cylinderVertexIndices;
	}
	this.getTextureCoords = function(){
		return textureCoordsCylinder;
	}
	
	this.initBuffers = function(){
		//Vertices del cilindro	
		this.webgl_position_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_position_buffer);
		
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.getVertex()), gl.STATIC_DRAW);
		this.webgl_position_buffer.itemSize = 3;
		this.webgl_position_buffer.numItems = (this.getVertex().length / 3);
		//Index vertex del cilindro
		this.webgl_index_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.webgl_index_buffer);
		
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.getVertexIndex()), gl.STATIC_DRAW);
		this.webgl_index_buffer.itemSize = 1;
		this.webgl_index_buffer.numItems = this.getVertexIndex().length;	
		//Texturas del cilindro
		this.webgl_texture_coord_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_texture_coord_buffer);
		
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.getTextureCoords()), gl.STATIC_DRAW);
		this.webgl_texture_coord_buffer.itemSize = 2;
		this.webgl_texture_coord_buffer.numItems = this.getTextureCoords().length/2;
	}
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

function Ship (curveDetail,precision, numberTall,radius) {
  /*
  bezier = function(u, p0, p1, p2, p3){
      var cX = 3 * (p1.x - p0.x),
          bX = 3 * (p2.x - p1.x) - cX,
          aX = p3.x - p0.x - cX - bX;
            
      var cY = 3 * (p1.y - p0.y),
          bY = 3 * (p2.y - p1.y) - cY,
          aY = p3.y - p0.y - cY - bY;
            
      var x = (aX * Math.pow(u, 3)) + (bX * Math.pow(u, 2)) + (cX * u) + p0.x;
      var y = (aY * Math.pow(u, 3)) + (bY * Math.pow(u, 2)) + (cY * u) + p0.y;
            
      return {x: x, y: y};
    },

    (function(){
      var accuracy = 0.01, //this'll give the bezier 100 segments
          p0 = {x: 0, y: 100}, //use whatever points you want obviously
          p1 = {x: 33, y: 0},
          p2 = {x: 66, y: 0},
          p3 = {x: 100, y: 100},
          p4 = {x: 5, y: 1650},
          p5 = {x: 95, y: 1650},
          ctx = document.createElement('canvas').getContext('2d');

      ctx.width = 500;
      ctx.height = 500;
      document.body.appendChild(ctx.canvas);
      
      ctx.moveTo(p0.x, p0.y);
      for (var i=0; i<=1; i+=accuracy){
         var p = bezier(i, p0, p1, p2, p3);
         var q = bezier(i, p0, p4, p5,p3);
         ctx.lineTo(p.x, p.y);
         ctx.lineTo(q.x, q.y);
      }
  
      ctx.stroke()
    })()
	*/
}

function Container(){
	this.positionX=null;
	this.positionY=null;
	this.positionZ=null;
	this.webgl_position_buffer = null;
	this.webgl_normal_buffer = null;
	this.webgl_texture_coord_buffer = null;
	this.webgl_index_buffer = null;

	this.vertices = [
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

	this.cubeVertexIndices = [
		0, 1, 2,   1, 2, 3,    		// Front face
		4, 5, 6,   5, 6, 7,    		// Back face
		8, 9, 10,   9, 10, 11,  	// Top face
		12, 13, 14,   13, 14, 15, 	// Bottom face
		1, 3, 5,   3, 5, 7, 		// Right face
		0, 2, 4,   2, 4, 6  		// Left face
	];

    this.textureCoords = [
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

    this.setPosition=function(where){
		this.positionX=where[1];
		this.positionY=where[1];
		this.positionZ=where[2];
	}

	this.getPositionX = function(){
		return this.positionX
	}

	this.getPositionY = function(){
		return this.positionY
	}

    this.initBuffers = function(){
    	//Buffer de vertices
    	this.webgl_position_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_position_buffer);
    	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
		this.webgl_position_buffer.itemSize = 3;
		this.webgl_position_buffer.numItems = 16;

		//Buffer de indices
		this.webgl_index_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.webgl_index_buffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.cubeVertexIndices), gl.STATIC_DRAW);
		this.webgl_index_buffer.itemSize = 1;
		this.webgl_index_buffer.numItems = 36;

		//Buffer de texturas
		this.webgl_texture_coord_buffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_texture_coord_buffer);
    	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.textureCoords), gl.STATIC_DRAW);
    	this.webgl_texture_coord_buffer.itemSize = 2;
  	 	this.webgl_texture_coord_buffer.numItems = 16;
    }
}

function grid (curveDetail,pasito, numberTall,radius) {
	this.webgl_position_buffer = null;
	this.webgl_normal_buffer = null;
	this.webgl_texture_coord_buffer = null;
	this.webgl_index_buffer = null;
	var puntosX = [];
	var puntosY = [];
	var puntosZ = [];	
	
	var numberOfPointsOfInterest = curveDetail;

	//Con esto voy a formar mi círculo erratico saliendo del medio, o sea del punto 0,0
	var angle = degToRad(360/numberOfPointsOfInterest);
	for (var i = 0; i<numberOfPointsOfInterest; i++){
		var alpha = angle * i;
		puntosX.push(radius*Math.cos(alpha) + Math.sin(1.6*alpha)/3);
		puntosY.push(radius*Math.sin(alpha) + Math.sin(1.6*alpha)/3);
		puntosZ.push(0);
	}
	
	var cubicSpline = [
		-1/6,  3/6,  -3/6,  1/6,
		3/6,  -6/6,  3/6,  0,
		-3/6,  0,  3/6,  0,
		1/6,  4/6,  1/6,  0
	]
	
	this.vertices = [];	

	//Si yo uso B-Spline cúbica, tendré esta fórmula
	for (var curva = 0; curva<=puntosX.length -4; curva++){		
		for (var u = 0; u <= 1; u+= pasito){
			var currentUs = vec4.create();
			vec4.set(currentUs,Math.pow(u,3),Math.pow(u,2),u,1);
			vec4.transformMat4(currentUs, currentUs, cubicSpline);
			
			var valueX = vec4.dot(currentUs,[puntosX[curva],puntosX[curva+1],puntosX[curva+2],puntosX[curva+3]]);	
			var valueY = vec4.dot(currentUs,[puntosY[curva],puntosY[curva+1],puntosY[curva+2],puntosY[curva+3]]);
			pushVertix(valueX,valueY,this.vertices)
		}
	}
	
	function pushVertix(valueX,valueY,vertices){
		vertices.push(valueX);
		vertices.push(valueY);
		vertices.push(0);
		for (var i = 1; i <numberTall-1; i++){			
			var scaler = 1/Math.pow(2,i);
			vertices.push(valueX*scaler);
			vertices.push(valueY*scaler);
			vertices.push(i*2);
		}
		for (var i = numberTall-1; i <numberTall; i++){
			var scaler = 1/Math.pow(2,i);
			vertices.push(valueX*scaler);
			vertices.push(valueY*scaler);
			vertices.push((numberTall-2)*2+i/10);
		}
	}
	
	//Ahora le digo como usar esos vértices
	this.vertexIndices = [];
	
	for(var wasd = 0; wasd < numberTall-1; wasd++){
		for (var indice = 0; numberTall*indice/2 +numberTall < (this.vertices.length/3); indice++){
			if (indice % 2 == 0){
				this.vertexIndices.push(numberTall*indice/2 + wasd);
				this.vertexIndices.push(numberTall*indice/2 + 1 + wasd);
				this.vertexIndices.push(numberTall*indice/2 + numberTall + wasd);					
			}else{			
				this.vertexIndices.push(numberTall*((indice-1)/2) + 1 + wasd);
				this.vertexIndices.push(numberTall*((indice-1)/2) + numberTall + wasd);
				this.vertexIndices.push(numberTall*((indice-1)/2) + numberTall +1 + wasd);
			}
		}
	}
	//Y aca le pongo la textura al grid	
    this.textureCoords = [];
	for (var indice = 0; indice < (this.vertices.length/3); indice++){
		var textCoordFirstOpinion= indice % numberTall;		
		var textCoordSecondOpinion = indice % (numberTall*2);
		if(textCoordSecondOpinion < numberTall){
			this.textureCoords.push(0.0);
		}else{
			this.textureCoords.push(1.0);
		}
		this.textureCoords.push(textCoordFirstOpinion*(  1/( numberTall-1 )  ) );	//ese cuatro es porque es el doble de alto que de ancho
	}
	
	this.getVertices = function(){
		return this.vertices;
	}
	this.getVertexIndices = function(){
		return this.vertexIndices;
	}
	this.getTextureCoords = function(){
		return this.textureCoords;
	}
	
	this.initBuffers = function(){
		//DEL VERTEX POSITION
		this.webgl_position_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_position_buffer);
		
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.getVertices()), gl.STATIC_DRAW);
		this.webgl_position_buffer.itemSize = 3;
		this.webgl_position_buffer.numItems = this.vertices.length/3;
		//DEL INDEX VERTEX
		this.webgl_index_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.webgl_index_buffer);
		
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.getVertexIndices()), gl.STATIC_DRAW);
		this.webgl_index_buffer.itemSize = 1;
		this.webgl_index_buffer.numItems = this.vertexIndices.length;
		//DE LA TEXTURA
		this.webgl_texture_coord_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_texture_coord_buffer);
		
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.getTextureCoords()), gl.STATIC_DRAW);
		this.webgl_texture_coord_buffer.itemSize = 2;
		this.webgl_texture_coord_buffer.numItems = this.textureCoords.length/2;	
	}
}
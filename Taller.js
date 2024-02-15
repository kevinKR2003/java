
//--------Ejercicios 1-----------

//• Crea un array con al menos 5 nombres de personas.
let name = ["Kevin", "Manuel", "Aguirre", "Pinzon", "Sofia"];

//• Recorre el array e imprime cada nombre en la consola
name.forEach(name=>{console.log(name)})

// Imprime la longitud del array
console.log(name.length);

//--------Ejercicios 2-----------

//Crea un array vacío
let nulo=[];
console.log(nulo);

//Agrega al menos 3 elementos al array utilizando diferentes métodos (por ejemplo, push, unshift)
nulo[nulo.length] = 'Luna';
nulo.push('Marte');
nulo[nulo.length] = 'Tierra';
console.log(nulo);

//• Elimina el último elemento del array.
nulo.length = 2;
console.log(nulo);

//• Elimina un elemento específico del array por su índice.
nulo.splice(2);
console.log(nulo);

//• Imprime el array final después de las modificaciones.
console.log(nulo);


//--------Ejercicios 3-----------


//• Crea un array con al menos 10 elementos de diferentes tipos (números, strings, booleanos)
let strings = [2,3,7,'kevin','brian','sara',true,false,true,5];
console.log(strings);


//• Busca un elemento específico en el array por su valor.
console.log(strings.at(-3));


//• Imprime la posición (índice) del elemento encontrado o un mensaje si no se encuentra.

let elementoBuscado = 'kevin';  

let indiceEncontrado = strings.indexOf(elementoBuscado);

if (indiceEncontrado !== -1) {
    console.log(`El elemento '${elementoBuscado}' se encuentra en la posición ${indiceEncontrado}.`);
} else {
    console.log(`El elemento '${elementoBuscado}' no se encuentra en el array.`);
    
};

//Bonus: Usa diferentes métodos para realizar la búsqueda (por ejemplo, indexOf, find).
let elementoEncontrado = strings.find(elemento => elemento === elementoBuscado);

if (elementoEncontrado !== undefined) {
    let indiceEncontrado = strings.indexOf(elementoEncontrado);
    console.log(`El elemento '${elementoBuscado}' se encuentra en la posición ${indiceEncontrado}.`);
} else {
    console.log(`El elemento '${elementoBuscado}' no se encuentra en el array.`);
}


//--------Ejercicio 4 ---------

let numeros = [1,8,10,3,6,19];

//Ordena el array de forma ascedente 
function ordena(numeros){
    return numeros.sort((a,b)=> a-b)
}
console.log("Array ordenado de forma ascedente: ",ordena(numeros));

// ordenar de forma descendente
function ordDesc(numeros){
    return numeros.sort((a, b) => b - a)
    }
console.log("Array ordena de forma descendente: ",ordDesc(numeros))

//-------- Ejercicio 5 -------
let personas1=[
    {Nombre:"Juan",edad: 19},
    {Nombre:"María", edad: 32},
    {Nombre:"David", edad: 10},
    {Nombre:"Estefanía", edad: 20}
]

//filtra el array para obtener solo los  nombres de las personas mayores de edad
const MayoresDeEdad = personas1.filter(persona => persona.edad >= 18);

// Imprimir los nombres de las personas que cumplen con el criterio
console.log("Nombres de las personas mayores de edad:",MayoresDeEdad);
MayoresDeEdad.forEach(persona => {
  console.log(personas1.nombre);
});


//------- Ejericicio 6 ------
let array1=[1,2,3,4,5,6]
let array2=["a", "b", "c", "d","e"]

let arraymezclado=[]

for(let i=0;i<array1.length;i++){
    arraymezclado.push(array1[i])
    arraymezclado.push(array2[i])
}
console.log("Arreglo mezclado: ",arraymezclado);

//--------Ejercicio 7------
//eliminar elementos duplicados en un array
let duplicados=[1,2,3,3,4,5,20,20,7,7,7,8,9]
let arraysinduplicados = duplicados.filter((elemento, indice, array) => {
    return array.indexOf(elemento) === indice;
});

console.log ("Array sin duplicados"  ,arraysinduplicados);

//------Ejercicio 8-------

let numeros1=[11,23,35,43,5,21,10,20];
let mayor= Math.max (...numeros1);
let menor= Math.min (...numeros1);
console.log ("El valor maximo es :", mayor)
console.log ("El valor minimo es :",menor)

//---- Ejercicio 9 ----
let objetos = [
    { tipo: "silla", color: "blanco", tamaño: "pequeño" },
    { tipo: "mesa", color: "negro", tamaño: "grande" },
    { tipo: "lámpara", color: "plateado", tamaño: "mediano" },
    { tipo: "sofá", color: "gris", tamaño: "grande" },
    { tipo: "estantería", color: "marrón", tamaño: "grande" }
  ];

  //instru yo no entendi la parte de Agrupa los elementos del array por el valor de la propiedad común
  //entonces los agrupe por el tamaño

  let objetosAgrupadosPorTamaño = objetos.reduce((agrupados, objeto) => {
    const tamaño = objeto.tamaño;
    if (!agrupados[tamaño]) {
      agrupados[tamaño] = [];
    }
    agrupados[tamaño].push(objeto);
    return agrupados;
  }, {});
  
  console.log(objetosAgrupadosPorTamaño);

  //------- Ejercicio 10 ------

  let elementos = [
    10,
    "Hola",
    true,
    { nombre: "Juan", edad: 30 },
    [1, 2, 3],
    {dias:"Lunes-Viernes"}
  ];

  let objetos1 = {};
  elementos.forEach((elemento, indice) => {
    objetos1[`propiedad${indice}`] = elemento;
  });
  
  console.log(objetos1);
//-----Ejercicio 11-----

// Array para almacenar los productos
let inventario = [];
function agregarProducto(nombre, descripcion, precio, cantidad, categoria) {
  let producto = {
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    cantidad: cantidad,
    categoria: categoria
  };
  inventario.push(producto);
  console.log("Producto agregado al inventario:", producto);
}

// Función para listar todos los productos
function listarProductos() {
  console.log("Inventario de productos:");
  inventario.forEach(producto => {
    console.log(producto);
  });
}

// Función para buscar un producto por nombre
function buscarProductos(nombre) {
  let productoEncontrado = inventario.find(producto => producto.nombre === nombre);
  if (productoEncontrado) {
    console.log("Producto encontrado:", productoEncontrado);
  } else {
    console.log("Producto no encontrado.");
  }
}
// Función para eliminar un producto del inventario
function eliminarProducto(nombre) {
  inventario = inventario.filter(producto => producto.nombre !== nombre);
  console.log("Producto eliminado del inventario.");
}

// Función para actualizar la cantidad en stock de un producto
function actualizarCantidad(nombre, nuevaCantidad) {
  let producto = inventario.find(producto => producto.nombre === nombre);
  if (producto) {
    producto.cantidad = nuevaCantidad;
    console.log("Cantidad actualizada para el producto:", producto);
  } else {
    console.log("Producto no encontrado.");
  }
}

console.log (inventario)




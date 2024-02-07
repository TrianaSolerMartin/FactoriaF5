const textoJSON =  '{"nombre":"Triana", "edad": 27, "animales-favoritos":["gatos", "pandas"]}';
//convierte el string en objeto

const datos = JSON.parse(textoJSON);

console.log(datos);

datos.saludar = function saludar () {
    return console.log(`hola soy ${datos.nombre}`)
}

datos.saludar();
console.log(datos);

//analiza que tipo de dato es

//const tipoDato = typeof(texto.JSON);

//console.log(tipoDato);

//Analiza que tipo de dato es

//const tipoDato2 = typeof datos;
//console.log(tipoDato2);

//Convierte valores en formato JSON
const datosStringify = JSON.stringify(datos);
console.log(datosStringify);
console.log(typeof datosStringify);
    

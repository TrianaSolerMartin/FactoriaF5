class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    obtenerInfo() {
        return `Área del rectángulo: ${this.ancho * this.alto}`;
    }
}

const miRectangulo = new Rectangulo(12, 33);
const miRectangulopequeño = new Rectangulo(8, 10);

//reutilizar clases
console.log(miRectangulo);
console.log(miRectangulopequeño);

//reutilizar metodo
console.log(miRectangulo.obtenerInfo());
console.log(miRectangulopequeño.obtenerInfo())

//reutilizar parametros

console.log(miRectangulo.ancho);

//Other example

class Coder {
    constructor(name, email, femCoder)
    {
        this.name = name;
        this.email = email;
        this.femCoder = femCoder;
    }
    saludar(){
        return `Hola soy ${this.name}`
    }
}

const Alba = new Coder("Alba", "alba@gmail.com", true);

console.log(Alba)
console.log(Alba.saludar())

const Triana = new Coder ("Triana", "Triana@gmail.com", true);

console.log(Triana)
console.log(Triana.saludar())

// Definición de la clase abstracta Libro
class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    // Método abstracto que debe ser implementado por las clases derivadas
    realizarAccion() {
        throw new Error("Este método debe ser implementado por las clases derivadas.");
    }
}

// Definición de una clase derivada Novela que hereda de Libro
class Novela extends Libro {
    realizarAccion() {
        console.log(`Leyendo la novela "${this.titulo}" de ${this.autor}.`);
    }
}

// Función principal
function main() {
    // Crear una instancia de Novela
    const miNovela = new Novela("Cien años de soledad", "Gabriel García Márquez");

    // Llamar al método realizarAccion de la instancia de Novela
    miNovela.realizarAccion();
}

// Llamar a la función principal
main();





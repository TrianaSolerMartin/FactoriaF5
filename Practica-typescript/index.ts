// enum Tallas {
//     pequeña,
//     mediana,
//     grande
// }

// enum Tallas {
//     pequeña =16,
//     mediana =56,
//     grande =57
// }

enum Tallas {
    pequeña = "small",
    mediana = "medium",
    grande = "large"
}

function mostrarTallaCamisa (talla: Tallas){
    let mensaje: string;

    switch (talla){
        case Tallas.pequeña:
            mensaje = "Esta camisa es talla pequeña";
            break;

        case Tallas.mediana:
            mensaje = "Esta camisa es talla mediana";
            break;
        case Tallas.grande: 
            mensaje = "Esta camisa es talla grande";
            break;

            default:
                mensaje = "esta talla no existe";
                break;
    }
    console.log(mensaje)
}

mostrarTallaCamisa(Tallas.pequeña)

// type

type Usuario = {
    nombre: String,
    telefono: Number,
    email: String,
}

let usuario1: Usuario = {
    nombre: "juan",
    telefono: 234,
    email: "juanantonio@gmail.com"
}


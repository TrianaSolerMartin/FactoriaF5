"use strict";
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
var Tallas;
(function (Tallas) {
    Tallas["peque\u00F1a"] = "small";
    Tallas["mediana"] = "medium";
    Tallas["grande"] = "large";
})(Tallas || (Tallas = {}));
function mostrarTallaCamisa(talla) {
    let mensaje;
    switch (talla) {
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
}
mostrarTallaCamisa("small")


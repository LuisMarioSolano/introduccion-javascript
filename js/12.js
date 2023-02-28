// "use strict";  // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

Object.seal(producto);  // .freese .seal

producto.precio = 'Nuevo precio';

delete producto.precio;

console.log(producto);
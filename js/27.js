// POO


// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}


// Object Constructor
function Producto (nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
const producto2 = new Producto('Monito Curvo de 49"', 800, true);
const producto3 = new Producto('Laptop', 300, false);
const producto4 = new Producto('Tablet', 500, true);
const producto5 = new Producto('Teclado', 100, true);
const producto6 = new Producto('Mouse', 50, false);

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
console.log(producto6);
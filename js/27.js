// POO


// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}


// Object Constructor
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido= apellido;
}
Cliente.prototype.formatearCliente = function(producto) {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

function Producto (nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

// Crear funciones que solo se utilizan en un objeto en especifico 
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, true);
const producto3 = new Producto('Laptop', 300, false);
const cliente = new Cliente('Mario', 'Solano');


console.log(producto2)
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());




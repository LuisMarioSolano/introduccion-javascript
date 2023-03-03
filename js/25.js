
const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television de 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

// ForEach (Se usa solo en arreglos)
// Itera y muestra nuevos resultados
carrito.forEach(producto => console.log(producto.nombre));

// Map (Se usa solo en arreglos)
// Se usa para crear un arreglo
const arreglo = carrito.map(producto => producto.nombre);

console.log(arreglo)
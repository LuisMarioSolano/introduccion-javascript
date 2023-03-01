// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];

console.table(numeros);

const meses = ["Enero", "Feberero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"];

console.table(meses);

// Acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[200]); // No definido

// Conoser la extensión de un arreglo
console.log(meses.length);


numeros.forEach(function(numero) {
  console.log(numero);
})
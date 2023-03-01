// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];




// Acceder a los valores de un arreglo
// console.log(numeros[4]);
// console.log(numeros[2]);
// console.log(numeros[200]); // No definido

// Conoser la extensión de un arreglo
// console.log(meses.length);


// numeros.forEach(function(numero) {
  //   console.log(numero);
  // })
  


numeros.push(60,70,80); // agrega al final del arreglo
numeros.unshift(-10,-20,-30) //agrega al inicio del arreglo

console.table(numeros);

const meses = ["Enero", "Feberero", "Marzo", "Abril", "Mayo"];

//  meses.pop(); // Elimina el ultimo elemento
//  meses.shift(); // Elimina el primer elemento

// meses.splice(2, 1);
// console.table(meses);

// Rest operatot y spread operator
const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);
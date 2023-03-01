// Funciones

// Declaración de funcion

function sumar() {
    console.log(10*10);
}
sumar();

// Expreción de la función
const sumar2 = function() {
    console.log(3 + 3);
}
sumar2();

// IIFE (Protege variables de otros archivos)
(function() {
    console.log('Esto es una función')
}) ();
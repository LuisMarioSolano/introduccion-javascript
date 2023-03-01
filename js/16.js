// Funciones

// Declaración de funcion

sumar();
function sumar() {
    console.log(10*10);
}

// Expreción de la función
sumar2();
const sumar2 = function() {
    console.log(3 + 3);
}

// IIFE (Protege variables de otros archivos)
(function() {
    console.log('Esto es una función')
}) ();
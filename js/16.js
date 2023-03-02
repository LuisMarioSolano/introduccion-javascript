// Funciones

// Declaración de funcion

sumar();
function sumar() {
    console.log(10*10);
}

// Expreción de la función
const sumar2 = function() {
    console.log(3 + 3);
}
sumar2();

// IIFE (Protege variables de otros archivos)
(function() {
    console.log('Esto es una función')
}) ();
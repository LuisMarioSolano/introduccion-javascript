// Promises

const usuarioAutenticado = new Promise ((resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado'); // El promise se cumple
    }else {
        reject('No se pudo iniciar sesión'); // El promise no se cumple
    }
});

console.log(usuarioAutenticado);

// En los promises existen 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazado
// Fulfield : Ya se cumplio
// Reject : Se ha rechazado o no se pudo cumplir
// This

const reservacion = {
    nombre: 'Mario',
    apellido: 'Solano',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();

// Si se usa un arrow function, en lugar de function(); este estara viendo el window y no el objeto 
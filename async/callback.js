function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 2000);
}

function adios(nombre, otherCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otherCallback();
    }, 1000);
}
console.log('Inciando proceso...');

hola('Erik', function(nombre) {
    adios(nombre, function(){
        console.log('Terminando proceso...');
    });

});

// hola('Erik', function() {});
// adios('Erik', function() {});


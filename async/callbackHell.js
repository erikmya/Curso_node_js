function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 2000);
}

function hablar(callbackHablar){
    setTimeout(function() {
        console.log('Bla,bla,bla,bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otherCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otherCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function(){
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback); 
    }
}

//  
console.log('Inciando proceso...');
hola('Erik', function (nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado');
    });
});

// hola('Erik', function(nombre) {
//     adios(nombre, function(){
//         console.log('Terminamos');
//     });
// });
// hola('Erik', function(nombre) {
//     hablar(function() {
//         hablar(function() {
//             hablar(function() {
//                 adios(nombre, function(){
//                     console.log('Terminando proceso...');
//                 });
//             });
//         });      
//     });
// });
// hola('Erik', function() {});
// adios('Erik', function() {});

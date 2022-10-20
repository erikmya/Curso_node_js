// const p = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('');

process.on('exit', () => {
    console.log('Erik, el proceso acabó');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
});

setTimeout(() => {
    console.log('Esto si se va a ver');
}, 0);

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se ha olvidado capturar un error');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});

funcionQueNoExiste();

console.log('Esto si el error no se recoje, no sale');
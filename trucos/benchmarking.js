console.time('todo');

let sum = 0;
console.time('bucle');
for (let i = 0; i < 100000000; i++) {
    sum += 1;
}

console.timeEnd('bucle');

let sum2 = 0;
console.time('bucle 2');
for (let j = 0; j < 10000000000; j++) {
    sum2 += 1;
}

console.timeEnd('bucle 2');

console.time('asincrono');
console.log ('Empieza el proceso async')
asincrona()
.then(()=> {
    console.timeEnd('asincrono');
});

console.timeEnd('todo');

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log('Termina el proceso asincrono');
            resolve();
        })
    })
}
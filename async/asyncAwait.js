// su sintaxis nos permite definir una funcion de forma explicita coo funcion asincrona y poder esperar a que esa funcion termine
// de esta forma podemos hacer "esperar" a la ejecucion del codigo en una determinada parte
async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function()  {
            console.log('hola ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}
async function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function (){
            console.log('bla bla bla...');
            // resolve(nombre);
            resolve('hay un error');
        }, 1000);
    });
}
async function adios(nombre){
    return new Promise ((resolve, reject) =>{
        setTimeout(function(){
            console.log('adios', nombre);
            resolve();
        }, 1000);
    })
}
// con esto podemos convertir procesos asincronos en aparentes sincronos pero nuestra funcion sigue siendo asincrona
async function main(){
    let nombre = await hola('richiiz');
    await hablar();
    await hablar();
    await hablar();
    await adios (nombre);
    console.log('termina el proceso bip bup bop')
}
console.log('empieza el proceso bip bup bip')
main();
let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No hay web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);

// Comandos para powershell

//$env:NOMBRE="Erik"
//$env:WEB="erik.com"
//node entorno.js
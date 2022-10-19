let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No hay web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);

// Comandos para powershell

//$env:NOMBRE="Erik"
//$env:WEB="erik.com"
//node entorno.js

console.log('Otra cosa...');

//Comandos nodemon
//npm i -g nodemon
//nodemon .\entorno.js - para ejecutar y hacer cambios en vivo un archivo

//Comandos pm2
//npm install -g pm2
//pm2 start .\entorno.js

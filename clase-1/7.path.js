const path = require("node:path");

//unir rutas con path.join, no es bueno crearlas

// = en unix son asi /
// en windows son asi \

console.log(path.sep); // para saber separaciones en tu OS

const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath); // une con los separadores propios del OS

const base = path.basename("/tmp/midu-secret-files/password.txt");
console.log(base); // te devuelve el nombre del fichero

const filename = path.basename("/tmp/midu-secret-files/password.txt", '.txt');
console.log(filename); // así te lo devuelve sin la extensión


const extension = path.extname('image.jpg');
console.log(extension); // te devuelve la extension

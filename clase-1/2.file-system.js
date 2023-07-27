const fs = require("node:fs"); // a partir de node 16 se recomienda poner node: el prefijo

const stats = fs.statSync("./archivo.txt");

console.log(
  stats.isFile(), //si es un fichero
  stats.isDirectory(), // si es una carpeta
  stats.isSymbolicLink(), //si es un enlace simbólico
  stats.size //tamaño en bytes
);

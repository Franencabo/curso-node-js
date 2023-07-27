const fs = require("node:fs");
// const { promisify } = require("node:util");

// const readFilePromise = promisyfy(fs.readFile);

// para hacer promesas, no es la forma nativa, pero así se podría

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log(text);
}); // esto te devuelve un buffer, hay que codificarlo

console.log("Hacer cosas mientras lee el archivo");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log(text);
});

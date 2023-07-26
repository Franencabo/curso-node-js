/* Objeto global que proporciona información y control sobre el proceso actual de ejecución */

// argumentos de entrada, devuelve un array con los args de entrada y los comandos que pongas en consola
console.log(process.argv);

// controlar el proceso y su salida
// con 0 es un exito y sale bien
// con 1 ha habido un error y debe parar
process.exit(1);

process.on("exit", () => {
  //limpiar los procesos
});

// current working directory
console.log(process.cwd());

// platform
console.log(process.env.NODE_ENV);

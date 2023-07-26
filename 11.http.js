const http = require("node:http");
const { findAvailablePort } = require("./12.free-port");

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo");
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(0, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});

// PORT=1234 node 11.http.js hay que poner esto en la consola

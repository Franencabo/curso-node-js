const net = require("node:net"); // con el protocolo TCP

function findAvailablePort(desirePort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(desirePort, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    });

    server.on("error", (err) => {
      if ((err.code = "EADDRINUSE")) {
        findAvailablePort(0).then((port) => resolve(port));
      } else {
        rejects(err);
      }
    });
  });
}

module.exports = { findAvailablePort };

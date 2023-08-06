const http = require("node:http");
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (req.url === "/") {
    res.end("Bienvenido a mi página");
  } else if (req.url === "/contacto") {
    res.end("<h1>Contacto</h1>");
  } else if (req.url === "/image.jpg") {
    fs.readFile("./clase-2/rinoceronte.jpg", (err, data) => {
      if (err) {
        console.log("error", err);
        res.statusCode = 500;
        res.end("<h1>500 Internal Server Error</h1>");
      } else {
        res.setHeader("Content-Type", "image/jpg");
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end("<h1>404</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`);
});

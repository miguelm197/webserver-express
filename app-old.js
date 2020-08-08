const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    let salida = {
      nombre: "Estefani Feirer",
      edad: 22,
      departamento: "Durazno",
      url: req.url
    };
    res.write(JSON.stringify(salida));
    res.end();
  })

  .listen(8080);

console.log("Servidor corriedo en el puerto 8080");

const express = require("express");
const app = express();

const hbs = require("hbs");
require("./hbs/helpers"); // Helpers de hbs

const port = process.env.PORT || 8080;


app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/parciales");
app.set("view engine", "hbs");


//     RUTEO
// ------------------

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Miguel",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

// app.get("/data", (req, res) => {
//   res.send("Hola data");
// });

app.listen(port, () => {
  console.log("Escuchando peticiones en el puerto " + port);
});

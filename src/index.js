import express from "express";

const app = express();
app.get("/", function (req, res) {
    return res.send({ mensaje: "Bienvenido a NOde.js" });
});

app.get("/saludo", function (req, res) {
    return res.send({ mensaje: "BieSaludo Niels desde aqui hola " });
});

app.listen(3000, function () {
    console.log("Servidor iniciado en http://127.0.0.1:3000");
});


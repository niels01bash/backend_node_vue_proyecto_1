import express from "express";
import rutas from './routes'

const app = express();
// aceptar peticiones en formato json (req.body)
app.use(express.json());

// RUTAS
app.use("/api/v1", rutas);


app.listen(3000, function(){
    console.log("Servidor iniciado en http://127.0.0.1:3000");
});


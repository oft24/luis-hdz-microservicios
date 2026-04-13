const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/registrar", async (req, res) => {
    try {
        await axios.post("http://servicio_b:5001/notificar", req.body);
        res.json({ mensaje: "Registro guardado y notificación enviada" });
    } catch {
        res.json({ mensaje: "Registro guardado pero servicio B está caído" });
    }
});

app.listen(5000, "0.0.0.0");

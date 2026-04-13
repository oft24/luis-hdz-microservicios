const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const NOTIF_URL = "http://servicio_b:5001/notificar";

app.get("/", (req, res) => {
  res.send("Servicio A funcionando 🚀");
});

app.post("/registrar", async (req, res) => {
  const { usuario, actividad } = req.body;

  if (!usuario || !actividad) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  let mensaje = "Registro guardado";

  try {
    await axios.post(NOTIF_URL, { usuario, actividad });
    mensaje += " y notificación enviada";
  } catch (error) {
    mensaje += " pero servicio B está caído";
  }

  res.status(201).json({ mensaje, usuario, actividad });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Servicio A en puerto 5000");
});

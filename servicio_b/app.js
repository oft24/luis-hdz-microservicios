const express = require("express");

const app = express();
app.use(express.json());

app.post("/notificar", (req, res) => {
  const { usuario, actividad } = req.body;

  console.log(`Procesando ${usuario}...`);

  setTimeout(() => {
    console.log(`✔ Notificación lista para ${usuario}`);
  }, 5000);

  res.json({ status: "ok" });
});

app.listen(5001, "0.0.0.0", () => {
  console.log("Servicio B en puerto 5001");
});

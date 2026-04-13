const express = require("express");
const app = express();

app.use(express.json());

app.post("/notificar", (req, res) => {
    console.log("Procesando datos...");
    res.json({ status: "ok" });
});

app.listen(5001, "0.0.0.0");

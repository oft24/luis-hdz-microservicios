const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

console.log("🚀 Iniciando aplicación...");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// 🔗 Conexión a Aurora
const db = mysql.createConnection({
    host: 'dbactividadesclases.chpmxnxnqi6a.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'zawarudo2424',
    database: 'testdb'
});

db.connect(err => {
    if (err) {
        console.error("❌ Error DB:", err);
        return;
    }
    console.log("✅ Conectado a Aurora");
});

// 🏠 Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🟢 REGISTRO
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    db.query(
        'INSERT INTO usuarios (username, password) VALUES (?, ?)',
        [username, password],
        (err) => {
            if (err) {
                console.error(err);
                return res.send('Error o usuario ya existe');
            }
            res.send('Registrado correctamente ✅');
        }
    );
});

// 🔵 LOGIN
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query(
        'SELECT * FROM usuarios WHERE username=? AND password=?',
        [username, password],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.send('Error en login');
            }

            if (results.length > 0) {
                res.send('Login correcto ✅');
            } else {
                res.send('Credenciales incorrectas ❌');
            }
        }
    );
});

// 📊 VER USUARIOS
app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error(err);
            return res.send('Error al obtener usuarios');
        }
        res.json(results);
    });
});

// 🚀 Servidor
app.listen(3000, '0.0.0.0', () => {
    console.log('🌐 Servidor corriendo en http://0.0.0.0:3000');
});

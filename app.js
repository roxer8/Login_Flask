const express = require('express');
const connection = require('./database'); // Asegúrate de que la ruta sea correcta

const app = express();
const PORT = 5000;

app.use(express.json());

// Ruta para obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const [rows] = await connection.query('SELECT * FROM usuarios');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

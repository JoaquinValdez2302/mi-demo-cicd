const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ status: 'OK', message: 'Pipeline CI/CD funcionando correctamente 🚀' });
});

module.exports = app;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}`);
    };
}
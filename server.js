require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const reservacionesRoutes = require('./routes/reservaciones');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(morgan('dev'));           // Registro de peticiones HTTP
app.use(cors());                  // Permitir peticiones desde otros orígenes
app.use(bodyParser.json());       // Parsear JSON en el cuerpo de las peticiones

// Ruta raíz para verificar estado del backend
app.get('/', (req, res) => {
  res.send('🟢 Little Lemon Backend está en línea');
});

// Rutas de la API
app.use('/api/reservaciones', reservacionesRoutes);

// Middleware global de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal 😵');
});

// Conexión a MongoDB Atlas y arranque del servidor
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Conectado a MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ Error de conexión a MongoDB:', err);
});
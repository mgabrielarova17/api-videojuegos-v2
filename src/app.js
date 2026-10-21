import express from 'express';
import gameRoutes from './routes/gameRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/games', gameRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
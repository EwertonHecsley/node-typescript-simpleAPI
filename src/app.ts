import express from 'express';
import rotaUsuario from './routes/rota.usuario';
const app = express();

app.use(express.json());

app.use(rotaUsuario)

export default app;
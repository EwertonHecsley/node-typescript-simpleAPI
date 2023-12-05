import express from 'express';
import 'express-async-errors';
import rotaUsuario from './routes/rota.usuario';
import { errorHandling } from './middleware/error.handling';

const app = express();

app.use(express.json());

app.use(rotaUsuario);

app.use(errorHandling);

export default app;
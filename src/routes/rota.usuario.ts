import { Router } from 'express';
import usuarioController from '../controller/usuario.controller';
const rotaUsuario = Router();

rotaUsuario.get('/usuario', usuarioController.buscarTodosUsuarios);

export default rotaUsuario;
import { Request, Response } from "express";
import usuarioService from "../service/usuario.service";

const buscarTodosUsuarios = async (_req: Request, res: Response) => {
    const resultado = await usuarioService.buscarTodosUsuarios();
    return res.status(200).json(resultado);

};

export default {
    buscarTodosUsuarios
}
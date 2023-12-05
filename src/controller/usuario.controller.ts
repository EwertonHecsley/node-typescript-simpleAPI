import { Request, Response } from "express";
import usuarioService from "../service/usuario.service";

const buscarTodosUsuarios = async (_req: Request, res: Response) => {
    try {
        const resultado = await usuarioService.buscarTodosUsuarios();
        return res.status(200).json(resultado);
    } catch (error: any) {
        if (error instanceof Error) return res.status(500).json({ mensagem: error.message });
    };
};

const cadastrarUsuario = async (req: Request, res: Response) => {
    const { nome, email, senha } = req.body;
    try {
        const [resultado] = await usuarioService.cadastrarUsuario(nome, email, senha);
        return res.status(201).json(resultado);
    } catch (error) {
        if (error instanceof Error) return res.status(500).json({ mensagem: error.message })
    };
};

export default {
    buscarTodosUsuarios,
    cadastrarUsuario
}
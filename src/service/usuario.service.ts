import { UsuarioFormatado } from '../model/type.usuario';
import usuarioModel from '../model/usuario.model';

const buscarTodosUsuarios = async () => {
    const resultado = await usuarioModel.buscarTodosUsuarios();
    const arrFormatado: UsuarioFormatado[] = [];
    resultado.forEach((usuario) => {
        const { senha: _, ...novoResultado } = usuario;
        arrFormatado.push(novoResultado as UsuarioFormatado);
    })
    return arrFormatado;
};

const cadastrarUsuario = async (nome: string, email: string, senha: string) => {
    const resultado = await usuarioModel.cadastrarUsuario(nome, email, senha);
    const { senha: _, ...novoResultado } = resultado[0];
    return novoResultado;
};

const buscarUsuarioId = async (id: string) => {
    const resultado = await usuarioModel.buscarUsuarioId(id);
    if (!resultado) throw new Error('Usuário não encontrado');
    const { senha: _, ...novoResultado } = resultado
    return novoResultado;
};

export default {
    buscarTodosUsuarios,
    cadastrarUsuario,
    buscarUsuarioId
};
import usuarioModel from '../model/usuario.model';

const buscarTodosUsuarios = async () => {
    const resultado = await usuarioModel.buscarTodosUsuarios();
    return resultado;
};

const cadastrarUsuario = async (nome: string, email: string, senha: string) => {
    const resultado = await usuarioModel.cadastrarUsuario(nome, email, senha);
    return resultado;
}

export default {
    buscarTodosUsuarios,
    cadastrarUsuario
};
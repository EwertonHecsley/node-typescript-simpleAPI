import usuarioModel from '../model/usuario.model';

const buscarTodosUsuarios = async () => {
    const resultado = await usuarioModel.buscarTodosUsuarios();
    return resultado;
};

export default {
    buscarTodosUsuarios
};
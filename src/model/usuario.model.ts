import knex from '../connection';
import { Usuario } from './type.usuario';

const buscarTodosUsuarios = async (): Promise<Usuario[]> => {
    const resultado = await knex<Usuario>('usuarios');
    return resultado;
};

const cadastrarUsuario = async (nome: string, email: string, senha: string) => {
    const resultado = await knex<Omit<Usuario, 'id'>>('usuarios').insert({
        nome,
        email,
        senha
    }).returning('*');
    return resultado;
};

const buscarUsuarioId = async (id: string) => {
    const resultdo = await knex<Usuario>('usuarios').where({ id: Number(id) }).first();
    return resultdo;
};

export default {
    buscarTodosUsuarios,
    cadastrarUsuario,
    buscarUsuarioId
};
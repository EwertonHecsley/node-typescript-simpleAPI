import knex from '../connection';
import { Usuario } from './type.usuario';

const buscarTodosUsuarios = async () => {
    const resultado = await knex<Usuario>('usuarios');
    return resultado;
};

export default {
    buscarTodosUsuarios
};
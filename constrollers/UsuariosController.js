import usuario from "../models/Usuario.js";

export default class UsuariosController {
    constructor() {
    }

    listar() {
        const usuario = new usuario();
        return usuario.all();
    }

    adicionar() {
        const usuario = new usuario("João", 70, false);
        usuario.add();
    }
}
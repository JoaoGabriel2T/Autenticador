import { Express } from "express";

import UsuariosController from "../constrollers/UsuariosController.js";
import usuarios from "../models/db.js"

const router = Express.Router();

router.get('/api/usuarios', (req, res)=>{
    const usuarios = new UsuariosController();
    res.send(usuarios.listar());
});
router.get('/api/adicionar', (req, res)=>{
    const usuarios = new UsuariosController();
    usuarios.adicionar();
    res.send("usuario adicionado com sucesso!");
})

export default router;
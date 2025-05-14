import usuarios from "./db";

export default class usuarios{

    constructor(nome, idade , administrador){
        this.nome = nome;
        this.idade = idade;
        this.administrador = administrador;

        if(!usuarios){
            usuarios = [];
        }
    }

    add(){
        usuarios.push(this);
    }

    all(){
        return usuarios;
    }
}
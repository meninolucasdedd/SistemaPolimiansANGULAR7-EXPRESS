import { Endereco } from "./endereco.models";

export class Espectador {
    _id:string
    usuarioId:string;
    cpf:string;
    endereco: Endereco;  
    constructor(){
        this.endereco = new Endereco();
    }
}

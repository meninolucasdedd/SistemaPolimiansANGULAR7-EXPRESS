import { Endereco } from "./endereco.models";
export class Companhia {
    _id:string;
    usuarioId: string;
    categoria: string;
    endereco: Endereco;
    cnpj:string;
    mei:string;
    qtdParticipantes: number;
    workshops: string[];
    espetaculosRealizados: string[];
    espetaculosEmCartaz: string[];
    constructor(){
        this.endereco = new Endereco();
    }
}
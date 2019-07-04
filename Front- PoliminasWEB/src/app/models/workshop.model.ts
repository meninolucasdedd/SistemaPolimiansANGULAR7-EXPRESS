import { Endereco } from "./endereco.models";

export class Workshop {
    _id:string;
    companhiaId: string;
    patrocinador:string;
    titulo: string;
    qtdParticipantes: number;
    material:string;
    descricao: string;
    categoria: string;
    participantes: string;
    valorInscricao: number;
    datas: string;
    endereco: Endereco;
    
    constructor(){
        this.endereco = new Endereco();
    }
}
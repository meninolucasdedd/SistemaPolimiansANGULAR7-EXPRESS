import { Endereco } from "./endereco.models";

export class Espetaculo{
    _id:string;
    companhiaId: string;
    patrocinador:string;
    titulo: string;
    sinopse: string;
    orcamento:  string;
    horario : number;
    comentarios : string;
    avaliacoes: string;
    descricao: string;
    categoria: string;
    qtdParticipantes: string;
    valorInscricao: number;
    datas: string;
    endereco: Endereco;
    emCartaz: boolean;
    
    constructor(){
        this.endereco = new Endereco();
    }
    
}
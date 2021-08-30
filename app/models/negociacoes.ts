import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
         this.negociacoes.push(negociacao);
    }

    lista(): Array<Negociacao>{
         return [...this.negociacoes];
    }
}


export class Negociacao {
   

    constructor(private data: Date,private quantidade: number, private valor:number) {
 
    }

    getData(): Date {
        return this.data;
    }

    getQuantidade(): number {
        return this.quantidade;
    }

    getValor(): number {
        return this.valor;
    }

    getVolume(): number {
        return this.quantidade * this.valor;
    }
}
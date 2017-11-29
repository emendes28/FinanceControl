export class Despesa {

  desc: string;
  data: Date;
  valor: number;

  constructor(desc: string, data: Date,valor: number) {
    this.desc = desc;
    this.data = data;
    this.valor = valor;
  }
}

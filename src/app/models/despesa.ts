export class Despesa {
  id: number;
  desc: string;
  data: Date;
  valor: number;

  constructor(id:number, desc: string, data: Date,valor: number) {
    this.id = id;
    this.desc = desc;
    this.data = data;
    this.valor = valor;
  }
}
